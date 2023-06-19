import { FC, memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import cls from 'shared/ui/Loader/Loader.module.scss'

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = memo(({ className = '' }) => {
  return (
    <div className={classNames(cls.Loader, {}, [className])}>
      <span className={cls.loader}></span>
    </div>
  )
})
