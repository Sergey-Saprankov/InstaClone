import FlagRussia from '../../../../../../public/icon/flag-russia.svg'
import FlagUnitedKingdom from '../../../../../../public/icon/flag-united-kingdom.svg'
import { LanguageType } from '../LangSwitcher'

import cls from './LangOption.module.scss'
interface LanguageOptionProps {
  language: LanguageType
}

export const LangOption = ({ language }: LanguageOptionProps) => {
  let FlagIcon
  let label

  switch (language) {
    case 'en':
      FlagIcon = FlagUnitedKingdom
      label = 'English'
      break
    case 'ru':
      FlagIcon = FlagRussia
      label = 'Russian'
      break
    default:
      FlagIcon = null
  }

  return (
    <div className={cls.container}>
      <FlagIcon />
      <div>{label}</div>
    </div>
  )
}
