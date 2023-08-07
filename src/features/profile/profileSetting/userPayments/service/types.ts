export type IPayments = IPayment[]

export interface IPayment {
  userId: number
  subscriptionId: string
  dateOfPayment: string
  endDateOfSubscription: string
  price: number
  subscriptionType: string
  paymentType: string
}
