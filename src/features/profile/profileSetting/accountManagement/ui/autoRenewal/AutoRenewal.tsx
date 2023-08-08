import { useState } from 'react'

import cls from 'features/profile/profileSetting/accountManagement/ui/autoRenewal/AutoRenewal.module.scss'
import { CheckBox } from 'shared/ui/Checkbox/Checkbox'

export const AutoRenewal = () => {
  const [changeChecked, setChangeChecked] = useState(true)
  // const isLoading = useAppSelector(state => state.accountManagement.isLoading)

  return (
    <div className={cls.autoRenewalBlock}>
      <div className={cls.checkBoxBlock}>
        <CheckBox isChecked={changeChecked} onChangeChecked={setChangeChecked} />
        Auto-Renewal
      </div>
    </div>
  )
}
