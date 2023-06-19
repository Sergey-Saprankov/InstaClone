import { RegisterParamsType } from 'features/auth/registration/service/types'
import { baseAPI } from 'shared/api/baseAPI'

export const registration = baseAPI.injectEndpoints({
  endpoints: build => ({
    register: build.mutation<void, RegisterParamsType>({
      query: arg => ({
        url: `/api/auth/registration`,
        method: 'Post',
        body: arg,
      }),
    }),
  }),
})

export const { useRegisterMutation } = registration
