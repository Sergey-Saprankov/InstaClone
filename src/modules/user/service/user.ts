import { ProfileParamsType } from './types'

import { baseAPI } from 'shared/api/baseAPI'

export const user = baseAPI.injectEndpoints({
  endpoints: build => ({
    getUserInfo: build.query<ProfileParamsType, void>({
      query: () => {
        return {
          url: '/users/profile',
          retries: 2,
        }
      },
      providesTags: ['User'],
    }),
  }),
  overrideExisting: true,
})

export const { useGetUserInfoQuery } = user
