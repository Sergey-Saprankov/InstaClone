import { FC, memo } from 'react'

import Logo from '../../../../public/icon/logo.svg'

import cls from './LoaderLogo.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface LoaderProps {
  className?: string
}

export const LoaderLogo: FC<LoaderProps> = memo(({ className = '' }) => {
  return (
    <div className={classNames(cls.LoaderLogo, {}, [className])}>
      <Logo fill={'var(--light-100)'} width={80} heidth={80} />
    </div>
  )
})
