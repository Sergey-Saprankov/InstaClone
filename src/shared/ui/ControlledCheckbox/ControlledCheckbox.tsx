import { ComponentPropsWithoutRef } from 'react'

import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import cls from '../Checkbox/Checkbox.module.scss'

export type ControlledInputProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>
  control: Control<TFieldValues>
} & Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'value' | 'id' | 'onValueChange'>

export const ControlledCheckbox = <TFieldValues extends FieldValues>({
  title,
  name,
  control,
  disabled,
  className,
  ...restProps
}: ControlledInputProps<TFieldValues>) => {
  const {
    field: { onChange, value, onBlur },
    fieldState: { error },
  } = useController({ name, control })

  const mods = {
    [cls.isDisabled]: disabled,
    [cls.isChecked]: value,
    [cls.disableChecked]: value && disabled,
  }

  return (
    <label className={cls.label}>
      <input
        onChange={onChange}
        onBlur={onBlur}
        checked={value}
        type="checkbox"
        disabled={disabled}
        className={cls.input_default}
        {...restProps}
      />
      {title}
    </label>
  )
}
