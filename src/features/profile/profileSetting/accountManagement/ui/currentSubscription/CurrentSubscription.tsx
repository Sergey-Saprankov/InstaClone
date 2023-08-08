import clsGeneral from '../AccountManagement.module.scss'

import cls from 'features/profile/profileSetting/accountManagement/ui/currentSubscription/CurrentSubscription.module.scss'

export const CurrentSubscription = () => {
  // const isLoading = useAppSelector(state => state.accountManagement.isLoading)
  // const typeAccount = useAppSelector(getTypeAccount)
  // const dispatch = useAppDispatch()
  //
  // const onChangeTypeAccount = (value: string) => {
  //   dispatch(setTypeAccount(value))
  // }

  return (
    <div className={cls.currentSubscriptionBlock}>
      <p className={clsGeneral.title}>Current Subscription:</p>
      <div className={cls.currentSubscription}>
        <div className={cls.titleCS}>
          <div className={cls.payment}>Expire at</div>
          <div className={cls.paymentData}>12.12.2022</div>
        </div>
        <div className={cls.titleCS}>
          <div className={cls.payment}>Next payment</div>
          <div className={cls.paymentData}>13.02.2023</div>
        </div>
      </div>
    </div>
  )
}
