import Paypal from '../../../../../../public/icon/paypal.svg'
import Stripe from '../../../../../../public/icon/stripe.svg'
import { NavLink } from '../../../../../shared/ui/NavLink/Navlink'
import { RadioGroup } from '../../../../../shared/ui/RadioGroup/RadioGroup'

import cls from './AccountManagement.module.scss'

export const AccountManagement = () => {
  const accountTypes = [
    { label: 'Personal', value: 'personal' },
    { label: 'Business', value: 'business' },
  ]

  const subscriptionsCosts = [
    { label: '$10 per 1 Day', value: '10' },
    { label: '$50 per 7 Day', value: '50' },
    { label: '$100 per month', value: '100' },
  ]

  return (
    <div className={cls.accountManagementBlock}>
      <RadioGroup options={accountTypes} label={'Account type:'} className={cls.accountType} />
      <RadioGroup
        options={subscriptionsCosts}
        label={'Your subscription costs:'}
        className={cls.subscriptionCost}
      />
      <div className={cls.linksContainer}>
        <NavLink href={'google.com'}>
          <Paypal />
        </NavLink>
        <span>Or</span>
        <NavLink href={'google.com'}>
          <Stripe />
        </NavLink>
      </div>
    </div>
  )
}
