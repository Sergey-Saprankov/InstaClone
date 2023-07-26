import { useState } from 'react'

import { useRouter } from 'next/router'

import FlagRussia from '../../../../../public/icon/flag-russia.svg'
import FlagUnitedKingdom from '../../../../../public/icon/flag-united-kingdom.svg'

import { LangSelect } from './LangSelect/LangSelect'
import cls from './LangSwitcher.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

type LangSwitcherProps = {
  isOpen: boolean
  className?: string
}

export type LanguageType = 'en' | 'ru'

export const LangSwitcher = ({ className = '', isOpen }: LangSwitcherProps) => {
  const { push, pathname, query, asPath, locale, locales } = useRouter()

  const defaultLocale = locale ?? 'ru'

  const [language, setLanguage] = useState(defaultLocale)

  const options = locales as LanguageType[]

  const onChange = (selectedLocale: string) => {
    setLanguage(selectedLocale)
    push(
      {
        pathname,
        query,
      },
      asPath,
      { locale: selectedLocale }
    )
  }

  const onChangeLanguageHandler = () => {
    locale === 'ru' ? onChange('en') : onChange('ru')
  }

  const buttonToggle = locale === 'ru' ? <FlagRussia /> : <FlagUnitedKingdom />

  return (
    <div className={cls.LangSwitcher}>
      <div className={classNames(cls.langSwitcherSelect, { [cls.close]: isOpen }, [])}>
        <LangSelect options={options} value={language} onChange={onChange} className={className} />
      </div>

      <div className={classNames(cls.buttonSwitcher, { [cls.open]: isOpen }, [])}>
        <Button onClick={onChangeLanguageHandler} theme={ButtonTheme.Clear}>
          {buttonToggle}
        </Button>
      </div>
    </div>
  )
}
