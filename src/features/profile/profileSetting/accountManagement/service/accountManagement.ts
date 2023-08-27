import { setIsLoading } from '../model/slice/accountManagementSlice'

import {
  GetCurrentSubscriptionsResponse,
  GetSubscriptionCostRequest,
  GetSubscriptionCostResponse,
} from './types'

import { baseAPI } from 'shared/api/baseAPI'

const accountManagement = baseAPI.injectEndpoints({
  endpoints: build => ({
    getSubscriptionCost: build.query<GetSubscriptionCostResponse, void>({
      query: () => ({
        url: '/subscriptions/cost-of-subscriptions',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          dispatch(setIsLoading(true))
          await queryFulfilled
        } finally {
          dispatch(setIsLoading(false))
        }
      },
    }),

    getCurrentSubscriptions: build.query<GetCurrentSubscriptionsResponse, void>({
      query: () => ({
        url: '/subscriptions/current-subscriptions',
      }),
    }),

    subscribe: build.mutation<{ url: string }, GetSubscriptionCostRequest>({
      query: arg => ({
        url: `/subscriptions`,
        method: 'POST',
        body: arg,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          dispatch(setIsLoading(true))
          await queryFulfilled
        } finally {
          dispatch(setIsLoading(false))
        }
      },
    }),

    cancelAutoRenewal: build.mutation<void, void>({
      query: () => ({
        url: `/subscriptions/canceled-auto-renewal`,
        method: 'POST',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          dispatch(setIsLoading(true))
          await queryFulfilled
        } finally {
          dispatch(setIsLoading(false))
        }
      },
    }),
  }),
  overrideExisting: true,
})

export const {
  useGetSubscriptionCostQuery,
  useSubscribeMutation,
  useGetCurrentSubscriptionsQuery,
  useCancelAutoRenewalMutation,
} = accountManagement
