import { useState } from 'react'

import { Listbox } from '@headlessui/react'

import ArrowLight from '../../../../../../public/icon/arrow-ios-forward.svg'
import { useSelectKeyboardHandling } from '../../../../../shared/hooks/useSelectKeyboardHandling'
import { LangOption } from '../LangOption/LangOption'
import { LanguageType } from '../LangSwitcher'

import cls from './LangSelect.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface LangSelectProps {
  options: LanguageType[]
  value: string
  onChange: (locale: string) => void
  className?: string
}

export const LangSelect = ({ options, value, onChange, className = '' }: LangSelectProps) => {
  const [isActive, setIsActive] = useState(false)

  const { onKeyDownHandler, onArrowDown } = useSelectKeyboardHandling({
    isActive,
    setIsActive,
  })

  return (
    <div className={classNames(cls.Select, {}, [className])}>
      <Listbox value={value} onChange={onChange}>
        <Listbox.Button
          onKeyDown={onArrowDown}
          onClick={() => setIsActive(prev => !prev)}
          className={classNames(cls.listBoxButton, { [cls.isActive]: isActive }, [])}
        >
          <LangOption key={value} language={value as LanguageType} />
          <ArrowLight
            className={classNames(cls.arrowIcon, { [cls.selected]: isActive }, [className])}
            alt={'arrow icon'}
          />
        </Listbox.Button>
        <Listbox.Options
          onBlur={() => setIsActive(false)}
          onKeyDown={onKeyDownHandler}
          className={classNames(cls.listBoxOptions, { [cls.isActive]: isActive }, [])}
        >
          {options?.map((option: string, index) => (
            <Listbox.Option
              className={({ active }) =>
                active ? `${cls.listBoxOption} ${cls.listBoxOptionActive}` : cls.listBoxOption
              }
              key={index}
              value={option}
              disabled={value === option}
            >
              <LangOption key={option} language={option as LanguageType} />
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
