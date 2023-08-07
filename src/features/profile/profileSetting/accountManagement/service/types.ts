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
