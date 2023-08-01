import { ComponentPropsWithoutRef } from 'react'

import { RadioGroup as RadioGroupHeadless } from '@headlessui/react'

import { classNames } from '../../lib/classNames/classNames'
import { Text, TextFontTheme } from '../Text/Text'

import cls from './RadioGroup.module.scss'

type Option = {
  label: string
  value: string
}

export type RadioGroupProps = {
  options: Option[]
  label?: string
  onChange?: () => void
  disabled?: boolean
} & ComponentPropsWithoutRef<'div'>

export const RadioGroup = ({
  options,
  disabled,
  label = '',
  className = '',
  ...rest
}: RadioGroupProps) => {
  return (
    <div className={classNames(cls.root, {}, [className])}>
      <Text tag={'h3'} font={TextFontTheme.INTER_SEMI_BOLD_L} className={cls.rootLabel}>
        {label}
      </Text>
      {/*<RadioGroupHeadless.Label>{label}</RadioGroupHeadless.Label>*/}
      <RadioGroupHeadless disabled={disabled} {...rest}>
        <div className={cls.optionContainer}>
          {options.map(option => (
            <RadioGroupHeadless.Option
              key={option.value}
              value={option.value}
              className={cls.option}
            >
              <div className={cls.icon} />
              <span className={cls.label}>{option.label}</span>
            </RadioGroupHeadless.Option>
          ))}
        </div>
      </RadioGroupHeadless>
    </div>
  )
}
