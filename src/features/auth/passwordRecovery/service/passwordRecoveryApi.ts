import { PasswordRecoveryParamsType } from 'features/auth/passwordRecovery/service/types'
import { baseAPI } from 'shared/api/baseAPI'

export const passwordRecovery = baseAPI.injectEndpoints({
  endpoints: build => ({
    passwordRecovery: build.mutation<void, PasswordRecoveryParamsType>({
      query: arg => ({
        url: `/auth/password-recovery`,
        method: 'POST',
        body: arg,
      }),
    }),
  }),
  overrideExisting: true,
})

export const { usePasswordRecoveryMutation } = passwordRecovery
