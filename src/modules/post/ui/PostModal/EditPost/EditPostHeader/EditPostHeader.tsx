import { FC, memo } from 'react'

import cls from './EditPostHeader.module.scss'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

interface IEditPostHeaderProps {
  onCloseModal: () => void
  updatePostRequest: () => void
}

export const EditPostHeader: FC<IEditPostHeaderProps> = memo(
  ({ onCloseModal, updatePostRequest }) => {
    return (
      <header className={cls.header}>
        <Button onClick={onCloseModal} className={cls.btn} theme={ButtonTheme.Clear}>
          <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.LIGHT}>
            Cancel
          </Text>
        </Button>
        <Text tag={'h2'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.LIGHT}>
          Edit Info
        </Text>

        <Button onClick={updatePostRequest} className={cls.btn} theme={ButtonTheme.Clear}>
          <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.PRIMARY}>
            Done
          </Text>
        </Button>
      </header>
    )
  }
)
