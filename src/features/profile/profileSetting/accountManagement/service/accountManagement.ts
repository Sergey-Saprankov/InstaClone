import { baseAPI } from '../../../../../shared/api/baseAPI'

import { GetSubscriptionCostResponse } from './types'

const accountManagement = baseAPI.injectEndpoints({
  endpoints: build => ({
    getSubscriptionCost: build.query<GetSubscriptionCostResponse, void>({
      query: () => ({
        url: '/api/subscriptions/cost-of-subscriptions',
      }),
    }),
  }),
})

export const { useGetSubscriptionCostQuery } = accountManagement
