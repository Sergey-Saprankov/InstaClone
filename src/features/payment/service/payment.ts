import { baseAPI } from 'shared/api/baseAPI'

export const payment = baseAPI.injectEndpoints({
  endpoints: build => ({
    subscribe: build.mutation<{ url: string }, void>({
      query: () => ({
        url: `/api/subscriptions`,
        method: 'POST',
        body: {
          typeSubscription: 'MONTHLY',
          paymentType: 'STRIPE',
          amount: 10,
        },
      }),
    }),
  }),
  overrideExisting: true,
})

export const { useSubscribeMutation } = payment
