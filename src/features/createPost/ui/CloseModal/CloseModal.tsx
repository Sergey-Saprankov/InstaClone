import { FC, memo } from 'react'

import cls from './CloseModal.module.scss'

import {
  setDescriptionPost,
  setImage,
  setStep,
} from 'features/createPost/model/slice/uploadPhotoSlice'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useTranslation } from 'shared/hooks/useTranslation'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

interface CloseModalProps {
  isOpen: boolean
  callBack: () => void
}

export const CloseModal: FC<CloseModalProps> = memo(({ isOpen, callBack }) => {
  const dispatch = useAppDispatch()

  const { t } = useTranslation()

  const mods = {
    [cls.open]: isOpen,
  }

  const onDeleteHandler = () => {
    dispatch(setImage(''))
    dispatch(setStep(0))
    dispatch(setDescriptionPost(''))
    callBack()
  }

  return (
    <div className={classNames(cls.CloseModal, mods, [])}>
      <div className={cls.content}>
        <header className={cls.header}>
          <Text tag={'h2'} font={TextFontTheme.INTER_REGULAR_XL} color={TextColorTheme.LIGHT}>
            {t.create.cancelPublication}
          </Text>
          <Text tag={'p'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.LIGHT}>
            {t.create.changesWillNotBeSaved}
          </Text>
        </header>
        <div className={classNames(cls.buttonBlock, {}, [cls.border])}>
          <Button onClick={onDeleteHandler} theme={ButtonTheme.Clear}>
            <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.ERROR}>
              {t.create.delete}
            </Text>
          </Button>
        </div>
        <div className={cls.buttonBlock}>
          <Button onClick={callBack} theme={ButtonTheme.Clear}>
            <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.LIGHT}>
              {t.create.cancel}
            </Text>
          </Button>
        </div>
      </div>
    </div>
  )
})
