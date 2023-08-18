import { FC, memo, useCallback, useRef, useState } from 'react'

import Plus from '../../../../public/icon/plus-square.svg'
import { useTranslation } from '../../../shared/hooks/useTranslation'

import cls from './CreatePost.module.scss'
import { EditImage } from './steps/EditImage/EditImage'
import { PublicationCompleted } from './steps/PublicationCompleted/PublicationCompleted'
import { SelectImage } from './steps/SelectImage/SelectImage'

import { getImage } from 'features/createPost/model/selectors/getImage/getImage'
import { getStep } from 'features/createPost/model/selectors/getStep/getStep'
import {
  setCloseModal,
  setDescriptionPost,
  setImage,
  setStep,
} from 'features/createPost/model/slice/uploadPhotoSlice'
import { STEP } from 'features/createPost/model/types/const'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import { Portal } from 'shared/ui/Portal/Portal'
import { Text, TextFontTheme } from 'shared/ui/Text/Text'

interface ICreatePost {
  className?: string
}

export const CreatePost: FC<ICreatePost> = memo(({ className = '' }) => {
  const step = useAppSelector(getStep)
  const image = useAppSelector(getImage)
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const onClickHandler = () => {
    setIsOpen(prev => !prev)
  }

  const { t } = useTranslation()

  const onChangeModalOpened = useCallback(() => {
    if (step === STEP.PUBLICATION_COMPLETED) {
      setIsOpen(false)
      dispatch(setImage(''))
      dispatch(setStep(0))
      dispatch(setDescriptionPost(''))

      return
    }

    if (image) {
      dispatch(setCloseModal(true))
    } else {
      setIsOpen(prev => !prev)
    }
  }, [image, step])

  return (
    <>
      <Button onClick={onClickHandler} theme={ButtonTheme.Clear} className={cls.btn}>
        <Plus fill={'currentColor'} />
        <Text tag={'span'} font={TextFontTheme.INTER_MEDIUM_L} className={className}>
          {t.sidebar.create}
        </Text>
      </Button>
      {isOpen && (
        <Portal>
          <Modal isOpen={isOpen} callback={onChangeModalOpened}>
            <div className={classNames(cls.content, { [cls.open]: step === 1 || step === 2 }, [])}>
              {!image && <SelectImage />}
              {image && step >= 0 && step <= 2 && <EditImage image={image} />}
              {image && step === 3 && <PublicationCompleted />}
            </div>
          </Modal>
        </Portal>
      )}
    </>
  )
})
