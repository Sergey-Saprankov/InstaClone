import { FC, memo, useCallback, useEffect, useRef, useState } from 'react'

import AvatarEditor from 'react-avatar-editor'
import { useSelector } from 'react-redux'

import { CloseModal } from './CloseModal/CloseModal'
import cls from './PhotoEditing.module.scss'

import { createFilteredFile } from 'features/profile/uploadPhoto/lib/createFilteredFile'
import { getDescription } from 'features/profile/uploadPhoto/model/selectors/getDescription/getDescription'
import { getFilter } from 'features/profile/uploadPhoto/model/selectors/getFilter/getFilter'
import { getIsOpenModal } from 'features/profile/uploadPhoto/model/selectors/getIsOpenModal/getIsOpenModal'
import { getStep } from 'features/profile/uploadPhoto/model/selectors/getStep/getStep'
import {
  setClearImagesAvatar,
  setCloseModal,
  setStep,
} from 'features/profile/uploadPhoto/model/slice/uploadPhotoSlice'
import { STEP } from 'features/profile/uploadPhoto/model/types/const'
import {
  useAddPostMutation,
  useUploadMutation,
} from 'features/profile/uploadPhoto/service/uploadPost'
import { Filters } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/Filters/Filters'
import { PhotoEditingHeader } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/PhotoEditingHeader/PhotoEditingHeader'
import { PopoverCrop } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/popovers/popoverCrop/PopoverCrop'
import { PopoverGallery } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/popovers/popoverGallery/PopoverGallery'
import { PopoverZoom } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/popovers/popoverZoom/PopoverZoom'
import { Publication } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/Publication/Publication'
import { PublicationCompleted } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/PublicationCompleted/PublicationCompleted'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { classNames } from 'shared/lib/classNames/classNames'
import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'

interface PhotoEditingProps {
  image: string
}

export const PhotoEditing: FC<PhotoEditingProps> = memo(({ image }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [upload] = useUploadMutation()
  const [addPost] = useAddPostMutation()
  const editorRef = useRef<AvatarEditor>(null)
  const step = useAppSelector(getStep)
  const [height, setHeight] = useState(500)
  const [width, setWidth] = useState(500)
  const [scale, setScale] = useState(1)
  const parentRef = useRef<HTMLDivElement>(null)
  const [crop, setCrop] = useState<undefined | number>(undefined)
  const dispatch = useAppDispatch()
  const description = useAppSelector(getDescription)
  const isOpen = useSelector(getIsOpenModal)
  const filter = useAppSelector(getFilter)

  const stretchAvatar = () => {
    const parentElement = parentRef.current

    if (parentElement) {
      const parentWidth = parentElement.offsetWidth
      const parentHeight = parentElement.offsetHeight

      // Задаем новые размеры для аватарки
      // Можно использовать useState для установки размеров
      const newWidth = parentWidth
      const newHeight = parentHeight

      setWidth(newWidth)
      setHeight(newHeight)
      // Обновляем размеры аватарки
      // Можно использовать useState и передать новые размеры в свойства width и height компонента AvatarEditor
    }
  }

  useEffect(() => {
    stretchAvatar()
    window.addEventListener('resize', stretchAvatar)

    return () => {
      window.removeEventListener('resize', stretchAvatar)
      dispatch(setClearImagesAvatar())
    }
  }, [])

  const onChangeParam = useCallback((width: number, height: number, crop: number | undefined) => {
    setCrop(crop)
    setHeight(height)
    setWidth(width)
  }, [])
  const onOpenedCloseModal = useCallback(() => {
    dispatch(setCloseModal(false))
  }, [])
  const onPublishPost = async () => {
    if (editorRef.current) {
      const file = await createFilteredFile(editorRef, filter)

      const formData = new FormData()

      formData.append('file', file)

      setIsLoading(true)
      upload(formData)
        .unwrap()
        .then(res =>
          addPost({ description, childrenMetadata: [{ uploadId: res.images[0].uploadId }] })
        )
        .then(res => {
          dispatch(setStep(3))
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  const modsSidebarR = {
    [cls.open]: step === STEP.FILTERS || step === STEP.PUBLICATION,
  }

  return (
    <div className={cls.PhotoEditing}>
      {isLoading && <LoaderContent isText={true} className={cls.loaderContent} />}
      <CloseModal isOpen={isOpen} callBack={onOpenedCloseModal} />

      {step < STEP.PUBLICATION_COMPLETED && <PhotoEditingHeader onPublishPost={onPublishPost} />}

      <div className={cls.wrapper} ref={parentRef}>
        {step === STEP.PUBLICATION_COMPLETED ? (
          <PublicationCompleted />
        ) : (
          <div className={cls.avatarContainer}>
            <AvatarEditor
              ref={editorRef}
              image={image}
              width={width}
              height={height}
              scale={scale}
              border={crop ? 1 : 0}
              style={{
                objectFit: 'cover',
                filter: filter,
              }}
            />
          </div>
        )}

        {step === STEP.CROP && (
          <div className={cls.popup}>
            <div className={cls.popupCol}>
              <PopoverCrop parentRef={parentRef} callBack={onChangeParam} />
              <PopoverZoom onScale={setScale} scale={scale} />
            </div>
            <PopoverGallery />
          </div>
        )}
      </div>

      <div className={classNames(cls.sidebarR, modsSidebarR, [])}>
        {step === STEP.FILTERS && <Filters />}
        {step === STEP.PUBLICATION && <Publication />}
      </div>
    </div>
  )
})
