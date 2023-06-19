import React from 'react'

import CloseIcon from '../../../../public/icon/close.svg'

import cls from 'features/auth/registration/ui/EmailSentModal/EmailSentModal.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export type ModalHeaderType = {
  title: string
  handleButtonClick: () => void
}

export const ModalHeader = ({ title, handleButtonClick }: ModalHeaderType) => {
  return (
    <div className={cls.header}>
      <Text tag={'h2'} font={TextFontTheme.INTER_BOLD_XL} color={TextColorTheme.LIGHT}>
        {title}
      </Text>
      <Button theme={ButtonTheme.Clear} onClick={handleButtonClick}>
        <CloseIcon width={14} height={14} />
      </Button>
    </div>
  )
}
