import { useState } from 'react'

import { useRouter } from 'next/router'

import { LangSelect } from './LangSelect/LangSelect'

type LangSwitcherProps = {
  className?: string
}

export type LanguageType = 'en' | 'ru'

export const LangSwitcher = ({ className = '' }: LangSwitcherProps) => {
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

  return <LangSelect options={options} value={language} onChange={onChange} className={className} />
}
