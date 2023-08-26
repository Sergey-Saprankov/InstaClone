import cls from './DeleteImageModal.module.scss'

import { setClearState, setCloseModal } from 'features/createPost/model/slice/uploadPhotoSlice'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useTranslation } from 'shared/hooks/useTranslation'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const DeleteImageModal = () => {
  const dispatch = useAppDispatch()

  const { t } = useTranslation()

  const onClose = () => {
    dispatch(setCloseModal(false))
  }

  const onDeleteHandler = () => {
    dispatch(setClearState())
    dispatch(setCloseModal(false))
  }

  return (
    <div className={cls.CloseModal}>
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
          <Button onClick={onClose} theme={ButtonTheme.Clear}>
            <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.LIGHT}>
              {t.create.cancel}
            </Text>
          </Button>
        </div>
      </div>
    </div>
  )
}
