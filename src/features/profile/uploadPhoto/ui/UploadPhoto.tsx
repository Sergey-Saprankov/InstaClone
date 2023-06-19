import { FC, memo, useCallback, useState } from 'react'

import Plus from '../../../../../public/icon/plus-square.svg'

import cls from './UploadPhoto.module.scss'
import { UploadPhotoModal } from './UploadPhotoModal/UploadPhotoModal'

import { getImage } from 'features/profile/uploadPhoto/model/selectors/getImage/getImage'
import { getStep } from 'features/profile/uploadPhoto/model/selectors/getStep/getStep'
import {
  setCloseModal,
  setDescriptionPost,
  setImage,
  setStep,
} from 'features/profile/uploadPhoto/model/slice/uploadPhotoSlice'
import { STEP } from 'features/profile/uploadPhoto/model/types/const'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import { Portal } from 'shared/ui/Portal/Portal'
import { Text, TextFontTheme } from 'shared/ui/Text/Text'

interface UploadPhotoProps {
  className?: string
}

export const UploadPhoto: FC<UploadPhotoProps> = memo(({ className = '' }) => {
  const step = useAppSelector(getStep)
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const image = useAppSelector(getImage)
  const onClickHandler = () => {
    setIsOpen(prev => !prev)
  }

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
          Create
        </Text>
      </Button>
      {isOpen && (
        <Portal>
          <Modal isOpen={isOpen} callback={onChangeModalOpened}>
            <UploadPhotoModal />
          </Modal>
        </Portal>
      )}
    </>
  )
})
