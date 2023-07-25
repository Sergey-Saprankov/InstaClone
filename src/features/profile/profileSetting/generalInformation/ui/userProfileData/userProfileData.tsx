import { Controller } from 'react-hook-form'

import { useTranslation } from '../../../../../../shared/hooks/useTranslation'
import { useDelProfileMutation, useUpdateProfileMutation } from '../../service/profile'

import cls from './userProfileData.module.scss'

import { useGetUserInfoQuery } from 'modules/user/service/user'
import { useProfileDataForm } from 'shared/hooks/useProfileDataForm'
import { useSetValuesFromProfileData } from 'shared/hooks/useSetValuesFromProfileData'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ControlledInputNew } from 'shared/ui/ControlledInput/ControlledInput'
import { ControlledTextArea } from 'shared/ui/ControlledTextArea/ControlledTextArea'
import { CustomDatePicker } from 'shared/ui/DatePicker/DatePicker'
import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'

export const UserProfileData = () => {
  const { control, handleSubmit, setValue } = useProfileDataForm()
  const { data: profileData, isLoading: isLoadingGetProfile } = useGetUserInfoQuery()
  const [profile, { isLoading: isLoadingUpdateProfile }] = useUpdateProfileMutation()
  const [delProfile] = useDelProfileMutation()

  useSetValuesFromProfileData(setValue, profileData)

  const { t } = useTranslation()

  const onSubmit = handleSubmit(data => {
    profile(data)
  })

  return (
    <form className={cls.form} onSubmit={onSubmit}>
      <div className={cls.form}>
        {(isLoadingGetProfile || isLoadingUpdateProfile) && <LoaderContent />}
        <ControlledInputNew
          control={control}
          name={'userName'}
          title={t.profileSettingPage.userName}
        />
        <ControlledInputNew
          control={control}
          name={'firstName'}
          title={t.profileSettingPage.firstName}
        />
        <ControlledInputNew
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
            />
          )}
        />
        <ControlledInputNew control={control} name={'city'} title={t.profileSettingPage.city} />
        <ControlledTextArea
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
          size={ButtonSize.L}
          onClick={() => delProfile()}
        >
          {t.profileSettingPage.deleteProfile}
        </Button>
        <Button type={'submit'} theme={ButtonTheme.PRIMARY} size={ButtonSize.XS}>
          {t.profileSettingPage.saveChanges}
        </Button>
      </div>
    </form>
  )
}
