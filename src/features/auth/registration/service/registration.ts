import { RegisterParamsType } from 'features/auth/registration/service/types'
import { baseAPI } from 'shared/api/baseAPI'

export const registration = baseAPI.injectEndpoints({
  endpoints: build => ({
    register: build.mutation<void, RegisterParamsType>({
      query: arg => ({
        url: `/api/v1/auth/registration`,
        method: 'Post',
        body: arg,
      }),
    }),
  }),
  overrideExisting: true,
})

export const { useRegisterMutation } = registration
