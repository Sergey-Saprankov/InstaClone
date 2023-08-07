import { UpdateUserInfoSchema } from 'features/profile/profileSetting/generalInformation/service/types'
import { baseAPI } from 'shared/api/baseAPI'

export const profile = baseAPI.injectEndpoints({
  endpoints: build => ({
    updateProfile: build.mutation<void, UpdateUserInfoSchema>({
      query: arg => ({
        url: `/users/profile`,
        method: 'PUT',
        body: arg,
      }),
      invalidatesTags: ['User'],
    }),
    delProfile: build.mutation<void, void>({
      query: arg => ({
        url: `/api/users/profile`,
        method: 'DELETE',
        body: arg,
      }),
      invalidatesTags: ['User'],
    }),
  }),
  overrideExisting: true,
})

export const { useUpdateProfileMutation, useDelProfileMutation } = profile
