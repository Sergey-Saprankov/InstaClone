import { useRef, useState, MouseEvent } from 'react'

import AvatarEditor, { Position } from 'react-avatar-editor'
import { useSelector } from 'react-redux'

import { DeleteImageModal } from './DeleteImageModal/DeleteImageModal'
import { Filters } from './Filters/Filters'
import { PhotoEditingHeader } from './PhotoEditingHeader/PhotoEditingHeader'
import { ArrowSlide } from './popovers/arrowSlide/ArrowSlide'
import { PopoversCrop } from './popovers/crop/PopoversCrop'
import { Publication } from './Publication/Publication'

import { convertToFiles } from 'features/createPost/lib/convertToFiles'
import { createFilteredFile } from 'features/createPost/lib/createFilteredFile'
import { getCrop } from 'features/createPost/model/selectors/getCrop/getCrop'
import { getCurrentImgIndex } from 'features/createPost/model/selectors/getCurrentImgIndex/getCurrentImgIndex'
import { getDescription } from 'features/createPost/model/selectors/getDescription/getDescription'
import { getHeight } from 'features/createPost/model/selectors/getHeight/getHeight'
import { getImages } from 'features/createPost/model/selectors/getImages/getImages'
import { getIsOpenModal } from 'features/createPost/model/selectors/getIsOpenModal/getIsOpenModal'
import { getStep } from 'features/createPost/model/selectors/getStep/getStep'
import { getWidth } from 'features/createPost/model/selectors/getWidth/getWidth'
import {
  setImageUrlUpdate,
  setPosition,
  setStep,
} from 'features/createPost/model/slice/uploadPhotoSlice'
import { STEP } from 'features/createPost/model/types/const'
import { ChildrenData } from 'features/createPost/service/types'
import { useAddPostMutation, useUploadMutation } from 'features/createPost/service/uploadPost'
import cls from 'features/createPost/ui/steps/EditImage/EditImage.module.scss'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { useStretchImage } from 'shared/hooks/useStretchImage'
import { classNames } from 'shared/lib/classNames/classNames'
import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'

export const EditImage = () => {
  const dispatch = useAppDispatch()
  const [upload] = useUploadMutation()
  const [addPost] = useAddPostMutation()
  const [isLoading, setIsLoading] = useState(false)
  const isOpen = useSelector(getIsOpenModal)

  const parentRef = useRef<HTMLDivElement>(null)
  const editorRef = useRef<AvatarEditor>(null)
  const images = useAppSelector(getImages)
  const step = useAppSelector(getStep)
  const height = useAppSelector(getHeight)
  const width = useAppSelector(getWidth)
  const crop = useAppSelector(getCrop)
  const description = useAppSelector(getDescription)
  const currentImgIndex = useAppSelector(getCurrentImgIndex)
  const currentImg = images[currentImgIndex]

  useStretchImage(parentRef)

  const onPositionChange = (position: Position) => {
    dispatch(setPosition({ currentImgIndex, position: position }))
  }

  const sendImgToBackend = async (file: File): Promise<{ images: { uploadId: string }[] }> => {
    const formData = new FormData()

    formData.append('file', file)

    return upload(formData).unwrap()
  }

  const onPublishPost = async () => {
    const childrenMetadata: ChildrenData[] = []
    const files = await convertToFiles(images)

    try {
      setIsLoading(true)
      const promises = files.map(file => sendImgToBackend(file))
      const results = await Promise.all(promises)

      results.forEach(el => {
        childrenMetadata.push({ uploadId: el.images[0].uploadId })
      })

      addPost({ description, childrenMetadata: childrenMetadata })
        .unwrap()
        .then(() => {
          dispatch(setStep(STEP.PUBLICATION_COMPLETED))
        })
        .finally(() => {
          setIsLoading(false)
        })
    } catch (e) {
      setIsLoading(false)
    }
  }

  const onChangeCanvas = async () => {
    const file = await createFilteredFile(editorRef, currentImg.filter)

    const imageUrl = URL.createObjectURL(file)
    const payload = { currentImgIndex, imagesUtlUpdate: imageUrl }

    dispatch(setImageUrlUpdate(payload))
    console.log(imageUrl)
  }

  const handlerMissClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).tagName !== 'CANVAS') {
      onChangeCanvas()
    }
  }

  const modsSidebarR = {
    [cls.open]: step === STEP.FILTERS || step === STEP.PUBLICATION,
  }

  return (
    <div className={cls.PhotoEditing} onClick={handlerMissClick}>
      {isLoading && <LoaderContent isText={true} className={cls.loaderContent} />}
      {isOpen && <DeleteImageModal />}

      <PhotoEditingHeader onPublishPost={onPublishPost} />

      <div className={cls.wrapper} ref={parentRef}>
        <div className={cls.avatarContainer}>
          <AvatarEditor
            ref={editorRef}
            image={currentImg.imageUrlOrigin}
            width={width}
            height={height}
            scale={currentImg.scale}
            border={crop ? 1 : 0}
            style={{
              objectFit: 'cover',
              filter: currentImg.filter,
            }}
            onPositionChange={onPositionChange}
            position={currentImg.position}
          />
        </div>

        {currentImgIndex > 0 && <ArrowSlide variant={'left'} currentIndex={currentImgIndex} />}
        {currentImgIndex < images.length - 1 && (
          <ArrowSlide variant={'right'} currentIndex={currentImgIndex} />
        )}
        {step === STEP.CROP && <PopoversCrop parentRef={parentRef} />}
      </div>

      <div className={classNames(cls.sidebarR, modsSidebarR, [])}>
        {step === STEP.FILTERS && <Filters />}
        {step === STEP.PUBLICATION && <Publication />}
      </div>
    </div>
  )
}
