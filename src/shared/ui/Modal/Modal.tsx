import { FC, memo, MouseEvent, ReactNode, useEffect } from 'react'

import Close from '../../../../public/icon/close.svg'

import cls from './Modal.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ModalProps {
  callback?: () => void
  isOpen?: boolean
  children: ReactNode
}

export const Modal: FC<ModalProps> = memo(({ callback, isOpen, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  const onClickContentHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const mods = {
    [cls.opened]: isOpen || '',
  }

  return (
    <div className={classNames(cls.Modal, mods, [])}>
      <Button className={cls.closeIcon} onClick={callback} theme={ButtonTheme.Clear}>
        <Close width={16} heigth={16} />
      </Button>
      <div onClick={callback} className={cls.overlay}>
        <div onClick={onClickContentHandler}>{children}</div>
      </div>
    </div>
  )
})
