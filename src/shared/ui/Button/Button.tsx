import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import cls from './Button.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

export enum ButtonTheme {
  Clear = 'clear',
  PRIMARY = 'primary',
  OUTLINE = 'outline',
  LIGHT = 'light',
}

export enum ButtonSize {
  XXl = 'xxl',
  Xl = 'xl',
  L = 'l',
  M = 'm',
  S = 's',
  XS = 'xs',
}

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  theme: ButtonTheme
  size?: ButtonSize
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    theme = 'medium',
    as: Component = 'button',
    children,
    className = '',
    size = '',
    type = 'button',
    disabled = false,
    ...otherProps
  } = props

  return (
    <button
      {...otherProps}
      type={type}
      disabled={disabled}
      className={classNames(cls.Button, {}, [className, cls[theme], cls[size]])}
    >
      {children}
    </button>
  )
}
