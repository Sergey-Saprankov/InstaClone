import React, { ChangeEvent, FC, ReactNode } from 'react'

import { classNames } from '../../lib/classNames/classNames'

import cls from './RadioButton.module.scss'

type PropsType = {
  children: ReactNode
  nameGroup: string
  value: string
  checked: boolean
  onChange: (value: string) => void
  disabled?: boolean
}

export const RadioButton: FC<PropsType> = ({
  children,
  nameGroup,
  value,
  checked,
  onChange,
  disabled,
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }

  return (
    <label className={classNames(cls.formGroup, { [cls.disable]: !!disabled })}>
      <input
        type={'radio'}
        name={nameGroup}
        value={value}
        checked={checked}
        className={cls.realRadio}
        onChange={onChangeHandler}
        disabled={disabled}
      />
      <span className={cls.customRadio} />
      {children}
    </label>
  )
}
