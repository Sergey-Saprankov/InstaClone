import { IPayments } from 'features/profile/profileSetting/userPayments/service/types'
import { baseAPI } from 'shared/api/baseAPI'

const userPayments = baseAPI.injectEndpoints({
  endpoints: build => ({
    getPayments: build.query<IPayments, void>({
      query: () => ({
        url: `/subscriptions/my-payments`,
      }),
      providesTags: ['Payments'],
    }),
  }),
})

export const { useGetPaymentsQuery } = userPayments
