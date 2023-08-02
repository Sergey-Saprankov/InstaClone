import { useAppDispatch } from '../../../../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../../../../shared/hooks/useAppSelector'
import { RadioButton } from '../../../../../../shared/ui/RadioButton/RadioButton'
import { getTypeAccount } from '../../model/selectors/getTypeAccount/getTypeAccount'
import { setTypeAccount } from '../../model/slice/accountManagementSlice'
import clsGeneral from '../AccountManagement.module.scss'

import cls from './AccountType.module.scss'

export const AccountType = () => {
  const typeAccount = useAppSelector(getTypeAccount)
  const dispatch = useAppDispatch()

  const onChangeTypeAccount = (value: string) => {
    dispatch(setTypeAccount(value))
  }

  return (
    <div className={cls.accountTypeBlock}>
      <p className={clsGeneral.title}>Account type:</p>
      <div className={clsGeneral.radioGroup}>
        <RadioButton
          nameGroup={'accountType'}
          value={'Personal'}
          checked={typeAccount === 'Personal'}
          onChange={onChangeTypeAccount}
        >
          Personal
        </RadioButton>
        <RadioButton
          nameGroup={'accountType'}
          value={'Business'}
          checked={typeAccount === 'Business'}
          onChange={onChangeTypeAccount}
        >
          Business
        </RadioButton>
      </div>
    </div>
  )
}
