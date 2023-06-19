import { Controller } from 'react-hook-form'

import {
  useDelProfileMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} from '../../service/profile'

import cls from './userProfileData.module.scss'

import { useProfileDataForm } from 'shared/hooks/useProfileDataForm'
import { useSetValuesFromProfileData } from 'shared/hooks/useSetValuesFromProfileData'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ControlledInputNew } from 'shared/ui/ControlledInput/ControlledInput'
import { ControlledTextArea } from 'shared/ui/ControlledTextArea/ControlledTextArea'
import { CustomDatePicker } from 'shared/ui/DatePicker/DatePicker'
import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'

export const UserProfileData = () => {
  const { control, handleSubmit, setValue } = useProfileDataForm()
  const { data: profileData, isLoading: isLoadingGetProfile } = useGetProfileQuery()
  const [profile, { isLoading: isLoadingUpdateProfile }] = useUpdateProfileMutation()
  const [delProfile] = useDelProfileMutation()

  useSetValuesFromProfileData(setValue, profileData)

  const onSubmit = handleSubmit(data => {
    profile(data)
  })

  return (
    <form className={cls.form} onSubmit={onSubmit}>
      <div className={cls.form}>
        {(isLoadingGetProfile || isLoadingUpdateProfile) && <LoaderContent />}
        <ControlledInputNew control={control} name={'userName'} title={'User Name'} />
        <ControlledInputNew control={control} name={'firstName'} title={'First Name'} />
        <ControlledInputNew control={control} name={'lastName'} title={'Last Name'} />
        <Controller
          control={control}
          name={'dateOfBirth'}
          defaultValue={profileData?.dateOfBirth ?? ''}
          render={({ field }) => (
            <CustomDatePicker
              title={'Date of birthday'}
              start={field.value}
              onChange={date => field.onChange(date as string)}
            />
          )}
        />
        <ControlledInputNew control={control} name={'city'} title={'City'} />
        <ControlledTextArea control={control} name={'aboutMe'} title={'aboutMe'} />
      </div>
      <div className={cls.decor}></div>
      <div className={cls.buttonContainer}>
        <Button
          className={cls.btn}
          theme={ButtonTheme.LIGHT}
          size={ButtonSize.L}
          onClick={() => delProfile()}
        >
          delete profile
        </Button>
        <Button type={'submit'} theme={ButtonTheme.PRIMARY} size={ButtonSize.XS}>
          Save Changes
        </Button>
      </div>
    </form>
  )
}
