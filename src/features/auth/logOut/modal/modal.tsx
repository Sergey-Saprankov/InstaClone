import { PropsWithChildren } from 'react'

import Close from '../../../../../public/icon/close.svg'

import cls from './modal.module.scss'

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Portal } from 'shared/ui/Portal/Portal'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

type ModalType = {
  active: boolean
  title: string
  onSubmit: () => void
  onClose: () => void
}

export const Modal = ({
  active,
  onClose,
  onSubmit,
  title,
  children,
}: PropsWithChildren<ModalType>) => {
  if (!active) {
    return null
  }

  return (
    <Portal>
      <div className={cls.modal} onClick={onClose}>
        <div className={cls.modalContent} onClick={e => e.stopPropagation()}>
          <div className={cls.modalHeader}>
            <Text tag={'span'} font={TextFontTheme.INTER_BOLD_XL} color={TextColorTheme.LIGHT}>
              {title}
            </Text>
            <Button onClick={onClose} theme={ButtonTheme.Clear}>
              <Close />
            </Button>
          </div>
          <div className={cls.strip}></div>
          <div className={cls.modalBody}>{children}</div>
          <div className={cls.modalFooter}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onSubmit} size={ButtonSize.XS}>
              <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L}>
                Yes
              </Text>
            </Button>
            <Button theme={ButtonTheme.PRIMARY} onClick={onClose} size={ButtonSize.XS}>
              <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L}>
                No
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </Portal>
  )
}
