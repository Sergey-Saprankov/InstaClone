import { forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react'

import { classNames } from '../../lib/classNames/classNames'

import cls from './Checkbox.module.scss'

export interface ICheckbox
  extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
  label?: string
}

export const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(
  ({ label, className, disabled, ...restProps }, ref): JSX.Element => {
    return (
      <label className={cls.label}>
        <input
          ref={ref}
          type="checkbox"
          disabled={disabled}
          className={cls.input_default}
          {...restProps}
        />
        {label}
      </label>
    )
  }
)
