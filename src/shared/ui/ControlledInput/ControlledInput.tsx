import { ComponentPropsWithoutRef, useState } from 'react'

import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import EyeOff from '../../../../public/icon/eye-off-outline.svg'
import EyeOn from '../../../../public/icon/eye-outline.svg'
import cls from '../Input/Input.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export type ControlledInputProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>
  control: Control<TFieldValues>
} & Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'value' | 'id' | 'onValueChange'>

export const ControlledInputNew = <TFieldValues extends FieldValues>({
  title,
  type = 'text',
  className,
  ...props
}: ControlledInputProps<TFieldValues>) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const isPassword = type === 'password'
  const {
    field: { onChange, value, onBlur },
    fieldState: { error },
  } = useController({ name: props.name, control: props.control })

  const handleShowPasswordToggled = () => setShowPassword(prev => !prev)
  const finalType = getFinalInputType(type, isPassword, showPassword)
  const iconPas = showPassword ? <EyeOn /> : <EyeOff />

  return (
    <label className={cls.label}>
      {title}
      <input
        className={classNames(cls.Input, {}, [className || ''])}
        type={finalType}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        {...props}
      />
      {isPassword && (
        <Button className={cls.btn} theme={ButtonTheme.Clear} onClick={handleShowPasswordToggled}>
          {iconPas}
        </Button>
      )}
      {!!error?.message && (
        <Text
          tag={'span'}
          color={TextColorTheme.ERROR}
          font={TextFontTheme.INTER_REGULAR_L}
          className={cls.errorText}
        >
          {error?.message}
        </Text>
      )}
    </label>
  )
}

type InputType = ComponentPropsWithoutRef<'input'>['type']

function getFinalInputType(
  type: InputType,
  isPassword: boolean,
  isPasswordVisible: boolean
): InputType {
  if (isPassword) {
    return isPasswordVisible ? 'text' : 'password'
  }

  return type
}
