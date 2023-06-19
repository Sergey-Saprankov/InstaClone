import { NewPasswordParamsType } from './types'

import { baseAPI } from 'shared/api/baseAPI'

export const createNewPassword = baseAPI.injectEndpoints({
  endpoints: build => ({
    createNewPassword: build.mutation<void, NewPasswordParamsType>({
      query: arg => ({
        url: `/api/auth/new-password`,
        method: 'POST',
        body: arg,
      }),
    }),
  }),
})
export const { useCreateNewPasswordMutation } = createNewPassword
