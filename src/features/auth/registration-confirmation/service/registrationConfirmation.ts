import { RegisterConfirmationParamsType } from 'features/auth/registration-confirmation/service/types'
import { baseAPI } from 'shared/api/baseAPI'

export const registrationConfirmation = baseAPI.injectEndpoints({
  endpoints: build => ({
    registrationConfirmation: build.mutation<void, RegisterConfirmationParamsType>({
      query: arg => ({
        url: `/api/auth/registration-confirmation`,
        method: 'POST',
        body: arg,
      }),
    }),
  }),
})

export const { useRegistrationConfirmationMutation } = registrationConfirmation
