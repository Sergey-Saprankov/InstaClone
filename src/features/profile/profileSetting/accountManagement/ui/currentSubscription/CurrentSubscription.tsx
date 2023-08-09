import clsGeneral from '../AccountManagement.module.scss'

import { useGetCurrentSubscriptionsQuery } from 'features/profile/profileSetting/accountManagement/service/accountManagement'
import cls from 'features/profile/profileSetting/accountManagement/ui/currentSubscription/CurrentSubscription.module.scss'
import { Text, TextFontTheme } from 'shared/ui/Text/Text'

export const CurrentSubscription = () => {
  const { data: currentSubscriptionData } = useGetCurrentSubscriptionsQuery()
  const time = '2023-08-09T10:06:49.429Z' //hardcore
  const dateOfPayment = new Date(
    currentSubscriptionData?.data[0] ? currentSubscriptionData?.data[0]?.dateOfPayment : time
  ).toLocaleString('ru', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  const endDateOfSubscription = new Date(
    currentSubscriptionData?.data[0]
      ? currentSubscriptionData?.data[0]?.endDateOfSubscription
      : time
  ).toLocaleString('ru', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  return (
    <div className={cls.currentSubscriptionBlock}>
      <p className={clsGeneral.title}>Current Subscription:</p>
      <div className={cls.currentSubscription}>
        <div className={cls.titleCS}>
          <div className={cls.payment}>Expire at</div>
          <Text font={TextFontTheme.INTER_SEMI_BOLD_L} tag={'span'}>
            {dateOfPayment}
          </Text>
        </div>
        <div className={cls.titleCS}>
          <div className={cls.payment}>Next payment</div>
          <Text font={TextFontTheme.INTER_SEMI_BOLD_L} tag={'span'}>
            {endDateOfSubscription}
          </Text>
        </div>
      </div>
    </div>
  )
}
