import React, { ChangeEvent, FC, ReactNode } from 'react'

import cls from './RadioButton.module.scss'

type PropsType = {
  children: ReactNode
  nameGroup: string
  value: string
  checked: boolean
  onChange: (value: string) => void
}

export const RadioButton: FC<PropsType> = ({ children, nameGroup, value, checked, onChange }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }

  return (
    <label className={cls.formGroup}>
      <input
        type={'radio'}
        name={nameGroup}
        value={value}
        checked={checked}
        className={cls.realRadio}
        onChange={onChangeHandler}
      />
      <span className={cls.customRadio} />
      {children}
    </label>
  )
}
