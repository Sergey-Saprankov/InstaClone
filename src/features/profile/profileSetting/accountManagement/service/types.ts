export type GetSubscriptionCostResponse = {
  data: GetSubscriptionCostType[]
}

type GetSubscriptionCostType = {
  amount: number
  typeDescription: string
}

export type GetSubscriptionCostRequest = {
  typeSubscription: string
  paymentType: string
  amount: number
}
export type GetCurrentSubscriptionsResponse = {
  data: CurrentSubscriptionsData[]
  hasAutoRenewal: boolean
}
export type CurrentSubscriptionsData = {
  userId: number
  subscriptionId: string
  dateOfPayment: string
  endDateOfSubscription: string
  autoRenewal: true
}
