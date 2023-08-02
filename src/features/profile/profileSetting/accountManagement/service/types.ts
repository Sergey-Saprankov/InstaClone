export type GetSubscriptionCostResponse = {
  data: GetSubscriptionCostType[]
}

type GetSubscriptionCostType = {
  amount: number
  typeDescription: string
}
