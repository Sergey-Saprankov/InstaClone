import { FC, memo, useCallback, useState } from 'react'

import Plus from '../../../../public/icon/plus-square.svg'
import { useTranslation } from '../../../shared/hooks/useTranslation'
import { getCurrentImgIndex } from '../model/selectors/getCurrentImgIndex/getCurrentImgIndex'
import { getImages } from '../model/selectors/getImages/getImages'

import cls from './CreatePost.module.scss'
import { EditImage } from './steps/EditImage/EditImage'
import { PublicationCompleted } from './steps/PublicationCompleted/PublicationCompleted'
import { SelectImage } from './steps/SelectImage/SelectImage'

import { getStep } from 'features/createPost/model/selectors/getStep/getStep'
import { setClearState, setCloseModal } from 'features/createPost/model/slice/uploadPhotoSlice'
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
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const images = useAppSelector(getImages)
  const currentImgIndex = useAppSelector(getCurrentImgIndex)
  const currentImage = images[currentImgIndex]
  const step = useAppSelector(getStep)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onOpenModal = () => setIsOpen(prev => !prev)

  const onChangeModalOpened = useCallback(() => {
    if (step === STEP.PUBLICATION_COMPLETED) {
      setIsOpen(false)
      dispatch(setClearState())

      return
    }

    if (currentImage?.imageUrlOrigin) {
      dispatch(setCloseModal(true))
    } else {
      setIsOpen(prev => !prev)
    }
  }, [currentImage, step])

  const modsWidth = {
    [cls.open]: step === STEP.FILTERS || step === STEP.PUBLICATION,
  }

  return (
    <>
      <Button onClick={onOpenModal} theme={ButtonTheme.Clear} className={cls.btn}>
        <Plus fill={'currentColor'} />
        <Text tag={'span'} font={TextFontTheme.INTER_MEDIUM_L} className={className}>
          {t.sidebar.create}
        </Text>
      </Button>
      {isOpen && (
        <Portal>
          <Modal isOpen={isOpen} callback={onChangeModalOpened}>
            <div className={classNames(cls.content, modsWidth, [])}>
              {step === STEP.SELECT_IMAGE && <SelectImage />}
              {step > STEP.SELECT_IMAGE && step < STEP.PUBLICATION_COMPLETED && <EditImage />}
              {step === STEP.PUBLICATION_COMPLETED && <PublicationCompleted />}
            </div>
          </Modal>
        </Portal>
      )}
    </>
  )
})
