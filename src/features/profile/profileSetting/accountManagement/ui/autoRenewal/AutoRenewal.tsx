import {
  useCancelAutoRenewalMutation,
  useGetCurrentSubscriptionsQuery,
} from 'features/profile/profileSetting/accountManagement/service/accountManagement'
import cls from 'features/profile/profileSetting/accountManagement/ui/autoRenewal/AutoRenewal.module.scss'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Checkbox } from 'shared/ui/Checkbox/Checkbox'

export const AutoRenewal = () => {
  const isLoading = useAppSelector(state => state.accountManagement.isLoading)
  const { data: autoRenewal } = useGetCurrentSubscriptionsQuery()
  const [canceledAutoRenewal] = useCancelAutoRenewalMutation()
  const onChangeCheckedAutoRenewal = () => {
    canceledAutoRenewal()
  }

  if (!autoRenewal) return <></>
  const isCheck = autoRenewal.hasAutoRenewal ? autoRenewal.hasAutoRenewal : false

  return (
    <div className={cls.autoRenewalBlock}>
      <div className={cls.checkBoxBlock}>
        <Checkbox checked={isCheck} onChange={onChangeCheckedAutoRenewal} disabled={isLoading} />
        <span>Auto-Renewal</span>
      </div>
    </div>
  )
}
