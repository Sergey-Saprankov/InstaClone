import React, { FC, memo, ReactNode } from 'react'

import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

import cls from './NavLink.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

export enum NavLinkColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  GREY = 'grey',
}

interface NavLinkProps extends LinkProps {
  className?: string
  children: ReactNode
  color?: NavLinkColor
}

export const NavLink: FC<NavLinkProps> = memo(
  ({ href, className = '', children, color = 'light', ...otherProps }) => {
    const { pathname } = useRouter()

    const mods = {
      [cls.isActive]: href === pathname,
    }

    return (
      <Link
        {...otherProps}
        className={classNames(cls.NavLink, mods, [className, cls[color]])}
        href={href}
      >
        {children}
      </Link>
    )
  }
)
