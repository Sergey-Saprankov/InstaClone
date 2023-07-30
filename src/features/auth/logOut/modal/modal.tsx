import { PropsWithChildren } from 'react'

import Close from '../../../../../public/icon/close.svg'
import { useTranslation } from '../../../../shared/hooks/useTranslation'

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
  const { t } = useTranslation()

  if (!active) {
    return null
  }

  return (
    <Portal>
      <div className={cls.modal} onClick={onClose}>
        <div className={cls.modalContent} onClick={e => e.stopPropagation()}>
          <div className={cls.modalHeader}>
            <Text tag={'span'} font={TextFontTheme.INTER_BOLD_L} color={TextColorTheme.LIGHT}>
              {title}
            </Text>
            <Button onClick={onClose} theme={ButtonTheme.Clear}>
              <Close />
            </Button>
          </div>
          <div className={cls.strip}></div>
          <div className={cls.modalBody}>{children}</div>
          <div className={cls.modalFooter}>
            <Button
              className={cls.btn}
              theme={ButtonTheme.OUTLINE}
              onClick={onSubmit}
              size={ButtonSize.XS}
            >
              <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L}>
                {t.common.yes}
              </Text>
            </Button>
            <Button
              className={cls.btn}
              theme={ButtonTheme.PRIMARY}
              onClick={onClose}
              size={ButtonSize.XS}
            >
              <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L}>
                {t.common.no}
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </Portal>
  )
}
