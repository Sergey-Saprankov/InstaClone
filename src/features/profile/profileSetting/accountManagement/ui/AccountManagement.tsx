import { useAppSelector } from '../../../../../shared/hooks/useAppSelector'
import { getTypeAccount } from '../model/selectors/getTypeAccount/getTypeAccount'

import cls from './AccountManagement.module.scss'
import { AccountType } from './accountType/AccountType'
import { SubscriptionCosts } from './subscriptionCosts/SubscriptionCosts'

export const AccountManagement = () => {
  const typeAccount = useAppSelector(getTypeAccount)

  return (
    <div className={cls.accountManagementBlock}>
      <AccountType />
      {typeAccount === 'Business' && <SubscriptionCosts />}
    </div>
  )
}
