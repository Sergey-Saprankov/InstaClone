import React, { useRef, useState } from 'react'

import AvatarEditor from 'react-avatar-editor'

import Photo from '../../../../../../../public/icon/photo.svg'

import cls from './SettingPhotoModal.module.scss'

import { useSendAvatarMutation } from 'features/profile/profileSetting/photoSetting/service/photoSetting'
import { useTranslation } from 'shared/hooks/useTranslation'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { InputTypeFile } from 'shared/ui/InputTypeFile/InputTypeFile'
import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'
import { ModalHeader } from 'shared/ui/ModalHeader/ModalHeader'
import { Portal } from 'shared/ui/Portal/Portal'

export type SettingPhotoModalType = {
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
}

export const SettingPhotoModal = ({ isModalOpen, setIsModalOpen }: SettingPhotoModalType) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const editorRef = useRef<AvatarEditor>(null)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0.5, y: 0.5 })
  const [sendAvatar, { isLoading: isAvatarLoading }] = useSendAvatarMutation()

  const { t } = useTranslation()

  const handleSaveAvatar = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas()

      canvas.toBlob(blob => {
        if (blob) {
          const file = new File([blob], 'avatar', { type: blob.type })

          const formData = new FormData()

          formData.append('file', file)

          sendAvatar(formData)
            .unwrap()
            .then(() => {
              setIsModalOpen(false)
              setSelectedImage(null)
            })
        }
      })
    }
  }

  const handlePositionChange = (position: { x: number; y: number }) => {
    setPosition(position)
  }
  const handleButtonClick = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  if (!isModalOpen) return null

  return (
    <Portal>
      <div className={cls.container}>
        {isAvatarLoading && <LoaderContent />}
        <ModalHeader
          title={t.profileSettingPage.addProfilePhoto}
          handleButtonClick={handleButtonClick}
        />
        <div className={cls.main}>
          <div
            className={classNames(
              cls.photoContainer,
              {
                [cls.emptyPhotoContainer]: selectedImage === null,
              },
              []
            )}
          >
            {selectedImage ? (
              <AvatarEditor
                ref={editorRef}
                image={selectedImage}
                width={316}
                height={316}
                color={[23, 23, 23, 0.6]}
                backgroundColor={'black'}
                scale={1}
                borderRadius={155}
                position={position}
                onPositionChange={handlePositionChange}
                crossOrigin="anonymous"
                disableBoundaryChecks={false}
              />
            ) : (
              <Photo className={cls.photo} />
            )}
          </div>
          <div
            className={classNames(cls.btnContainer, {
              [cls.selectPhoto]: selectedImage === null,
              [cls.save]: selectedImage !== null,
            })}
          >
            {selectedImage ? (
              <Button
                theme={ButtonTheme.PRIMARY}
                className={cls.saveBtn}
                onClick={handleSaveAvatar}
              >
                {t.profileSettingPage.saveChanges}
              </Button>
            ) : (
              <InputTypeFile
                setSelectedImage={setSelectedImage}
                label={t.common.selectFromComputer}
              />
            )}
          </div>
        </div>
      </div>
    </Portal>
  )
}
