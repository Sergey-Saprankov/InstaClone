import { FC, memo, ReactNode } from 'react'

import cls from './Text.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

export enum TextFontTheme {
  INTER_SEMI_BOLD_XL = 'interSemiBoldXL',
  INTER_SEMI_BOLD_L = 'interSemiBoldL',
  INTER_SEMI_BOLD_M = 'interSemiBoldM',

  INTER_BOLD_XL = 'interBoldXL',
  INTER_BOLD_L = 'interBoldL',
  INTER_BOLD_M = 'interBoldM',
  INTER_BOLD_S = 'interBoldS',

  INTER_MEDIUM_L = 'interMediumL',

  INTER_REGULAR_XL = 'interRegularXL',
  INTER_REGULAR_L = 'interRegularL',
  INTER_REGULAR_M = 'interRegularM',
}

export enum TextColorTheme {
  LIGHT = 'light',
  ERROR = 'error',
  PRIMARY = 'primary',
  LIGHT900 = 'light900',
}

interface TextProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
  children: ReactNode
  className?: string
  font?: TextFontTheme
  color?: TextColorTheme
}

export const Text: FC<TextProps> = memo(
  ({ children, tag, className = '', font = 'interRegularM', color = '' }) => {
    const Tag = tag

    return (
      <Tag className={classNames(cls.Text, {}, [className, cls[font], cls[color]])}>{children}</Tag>
    )
  }
)
