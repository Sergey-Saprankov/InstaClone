// useSetValuesFromProfileData.ts
import { useEffect } from 'react'

import { UseFormSetValue } from 'react-hook-form'

type ProfileParamsType = {
  userName: string
  firstName: string
  lastName: string
  dateOfBirth?: string
  city: string
  aboutMe: string
}

const fieldMap: { [K in keyof ProfileParamsType]?: string } = {
  userName: 'userName',
  firstName: 'firstName',
  lastName: 'lastName',
  dateOfBirth: 'dateOfBirth',
  city: 'city',
  aboutMe: 'aboutMe',
}

export const useSetValuesFromProfileData = (
  setValue: UseFormSetValue<any>,
  profileData: ProfileParamsType | undefined
) => {
  useEffect(() => {
    if (profileData) {
      for (const key in fieldMap) {
        if (key in profileData) {
          const value = profileData[key as keyof ProfileParamsType]

          setValue(fieldMap[key as keyof ProfileParamsType]!, value !== null ? value : '')
        }
      }
    }
  }, [profileData, setValue])
}
