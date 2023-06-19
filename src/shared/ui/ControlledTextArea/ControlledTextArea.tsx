import { ComponentPropsWithoutRef } from 'react'

import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import cls from 'shared/ui/TextArea/TextArea.module.scss'

export type ControlledTextAreaProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>
  control: Control<TFieldValues>
} & Omit<ComponentPropsWithoutRef<'textarea'>, 'onChange' | 'value' | 'id' | 'onValueChange'>

export const ControlledTextArea = <TFieldValues extends FieldValues>({
  title,
  className,
  ...props
}: ControlledTextAreaProps<TFieldValues>) => {
  const {
    field: { onChange, value, onBlur },
    fieldState: { error },
  } = useController({ name: props.name, control: props.control })

  return (
    <label className={classNames(cls.label, {}, [])}>
      {title}
      <textarea
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        className={classNames(cls.textArea, {}, [className || ''])}
        {...props}
      ></textarea>
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
