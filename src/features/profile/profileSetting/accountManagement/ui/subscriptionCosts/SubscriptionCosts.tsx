import { useState } from 'react'

import { useRouter } from 'next/router'

import PayPal from '../../../../../../../public/icon/paypal.svg'
import Stripe from '../../../../../../../public/icon/stripe.svg'
import { useAppSelector } from '../../../../../../shared/hooks/useAppSelector'
import { RadioButton } from '../../../../../../shared/ui/RadioButton/RadioButton'
import { useGetSubscriptionCostQuery, useSubscribeMutation } from '../../service/accountManagement'
import clsGeneral from '../AccountManagement.module.scss'

import cls from './SubscriptionCosts.module.scss'

export const SubscriptionCosts = () => {
  const router = useRouter()
  const [subscriptionType, setSubscriptionType] = useState('MONTHLY')
  const [amountSubscription, setAmountSubscription] = useState(10)
  const [subscribe] = useSubscribeMutation()
  const { data, isFetching } = useGetSubscriptionCostQuery()
  const isLoading = useAppSelector(state => state.accountManagement.isLoading)

  const changeSubscriptionTypeHandler = (subscriptionType: string, amount: number) => {
    setSubscriptionType(subscriptionType)
    setAmountSubscription(amount)
  }

  const handlerStripePayment = () => {
    const payload = {
      typeSubscription: subscriptionType,
      paymentType: 'STRIPE',
      amount: amountSubscription,
    }

    subscribe(payload)
      .unwrap()
      .then(res => router.push(res.url))
  }

  if (isFetching) return null

  return (
    <div>
      <p className={clsGeneral.title}>Your subscription costs:</p>
      <div className={clsGeneral.radioGroup}>
        {data?.data.map((el, i) => {
          const period = el.typeDescription.replace('_', ' ').toLowerCase()

          return (
            <RadioButton
              disabled={isLoading}
              key={i}
              nameGroup={'subscriptionCosts'}
              value={el.typeDescription}
              checked={subscriptionType === el.typeDescription}
              onChange={value => changeSubscriptionTypeHandler(value, el.amount)}
            >
              ${el.amount} per {period}
            </RadioButton>
          )
        })}
      </div>
      <div className={cls.paymentBlock}>
        <button disabled={isLoading} className={cls.payment}>
          <PayPal />
        </button>
        <button disabled={isLoading} className={cls.payment} onClick={handlerStripePayment}>
          <Stripe />
        </button>
      </div>
    </div>
  )
}
