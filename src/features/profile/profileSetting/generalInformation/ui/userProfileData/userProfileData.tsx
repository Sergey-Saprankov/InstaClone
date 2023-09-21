import { useEffect, useState } from 'react'

import { Controller } from 'react-hook-form'

import { useDelProfileMutation, useUpdateProfileMutation } from '../../service/profile'

import cls from './userProfileData.module.scss'

import { useGetUserInfoQuery } from 'modules/user/service/user'
import { useProfileDataForm } from 'shared/hooks/useProfileDataForm'
import { useSetValuesFromProfileData } from 'shared/hooks/useSetValuesFromProfileData'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ControlledInput } from 'shared/ui/ControlledInput/ControlledInput'
import { ControlledTextArea } from 'shared/ui/ControlledTextArea/ControlledTextArea'
import { CustomDatePicker } from 'shared/ui/DatePicker/DatePicker'
import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'

export const UserProfileData = () => {
  const { control, handleSubmit, setValue } = useProfileDataForm()
  const { data: profileData, isLoading: isLoadingGetProfile } = useGetUserInfoQuery()
  const [profile, { isLoading: isLoadingUpdateProfile }] = useUpdateProfileMutation()
  const [delProfile] = useDelProfileMutation()
  const [isValid, setIsValid] = useState(false)

  useSetValuesFromProfileData(setValue, profileData)

  const { t } = useTranslation()

  const onSubmit = handleSubmit(data => {
    profile(data)
  })

  const onChangeValidUserAge = (isDateValid: boolean) => {
    setIsValid(isDateValid)
  }

  return (
    <form className={cls.form} onSubmit={onSubmit}>
      <div className={cls.form}>
        {(isLoadingGetProfile || isLoadingUpdateProfile) && <LoaderContent />}
        <ControlledInput
          control={control}
          name={'userName'}
          title={t.profileSettingPage.userName}
        />
        <ControlledInput
          control={control}
          name={'firstName'}
          title={t.profileSettingPage.firstName}
        />
        <ControlledInput
          control={control}
          name={'lastName'}
          title={t.profileSettingPage.lastName}
        />
        <Controller
          control={control}
          name={'dateOfBirth'}
          defaultValue={profileData?.dateOfBirth ?? ''}
          render={({ field }) => (
            <CustomDatePicker
              title={t.profileSettingPage.dateOfBirthday}
              start={field.value}
              onChange={date => field.onChange(date as string)}
              onChangeValidUserAge={onChangeValidUserAge}
              isDateValid={isValid} //test branch
            />
          )}
        />
        <ControlledInput control={control} name={'city'} title={t.profileSettingPage.city} />
        <ControlledTextArea
          className={cls.bg}
          control={control}
          name={'aboutMe'}
          title={t.profileSettingPage.aboutMe}
        />
      </div>
      <div className={cls.decor}></div>
      <div className={cls.buttonContainer}>
        <Button
          className={cls.btn}
          theme={ButtonTheme.LIGHT}
          size={ButtonSize.XS}
          onClick={() => delProfile()}
        >
          {t.profileSettingPage.deleteProfile}
        </Button>
        <Button disabled={isValid} type={'submit'} theme={ButtonTheme.PRIMARY} size={ButtonSize.XS}>
          {t.profileSettingPage.saveChanges}
        </Button>
      </div>
    </form>
  )
}
