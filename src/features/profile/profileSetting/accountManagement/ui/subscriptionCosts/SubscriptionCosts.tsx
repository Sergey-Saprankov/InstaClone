import { loadStripe } from '@stripe/stripe-js'

import PayPal from '../../../../../../../public/icon/paypal.svg'
import Stripe from '../../../../../../../public/icon/stripe.svg'
import { useAppDispatch } from '../../../../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../../../../shared/hooks/useAppSelector'
import { RadioButton } from '../../../../../../shared/ui/RadioButton/RadioButton'
import { getSubscriptionType } from '../../model/selectors/getSubscriptionType/getSubscriptionType'
import {
  setAmountSubscription,
  setSubscriptionType,
} from '../../model/slice/accountManagementSlice'
import { useGetSubscriptionCostQuery } from '../../service/accountManagement'
import clsGeneral from '../AccountManagement.module.scss'

import cls from './SubscriptionCosts.module.scss'

export const SubscriptionCosts = () => {
  const { data, isFetching } = useGetSubscriptionCostQuery()
  const subscriptionType = useAppSelector(getSubscriptionType)
  const dispatch = useAppDispatch()

  const changeSubscriptionTypeHandler = (subscriptionType: string, amount: number) => {
    dispatch(setSubscriptionType(subscriptionType))
    dispatch(setAmountSubscription(amount))
  }
  const stripePaymentHandler = () => {
    console.log('stripe')
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
        <button className={cls.payment}>
          <PayPal />
        </button>
        <p>or</p>
        <button className={cls.payment} onClick={stripePaymentHandler}>
          <Stripe />
        </button>
      </div>
    </div>
  )
}
