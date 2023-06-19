import { useCallback, MouseEvent } from 'react'

import { Popover } from '@headlessui/react'

import DeleteIcon from '../../../../../../../../../public/icon/close.svg'
import SelectGalleryIcon from '../../../../../../../../../public/icon/select-gallery.svg'

import { getImage } from 'features/profile/uploadPhoto/model/selectors/getImage/getImage'
import { getImagesAvatar } from 'features/profile/uploadPhoto/model/selectors/getImagesAvatar/getImagesAvatar'
import {
  deleteAvatar,
  setCloseModal,
  setImage,
  setImagesAvatar,
} from 'features/profile/uploadPhoto/model/slice/uploadPhotoSlice'
import cls from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/popovers/popoverGallery/PopoverGallery.module.scss'
import clsG from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/popovers/popovers.module.scss'
import { InputTypeFilePlus } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/popovers/popoverZoom/InputTypeFilePlus'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { classNames } from 'shared/lib/classNames/classNames'

export const PopoverGallery = () => {
  const currentImage = useAppSelector(getImage)
  const images = useAppSelector(getImagesAvatar)
  const dispatch = useAppDispatch()

  const onChangePhoto = useCallback((images: FileList) => {
    const imagesArrUrl = [] as string[]

    for (const key in images) {
      if (/[0-9]/.test(key)) {
        imagesArrUrl.push(URL.createObjectURL(images[0]))
      }
    }

    dispatch(setImagesAvatar(imagesArrUrl))
  }, [])

  const handlerCheckPhoto = (img: string) => {
    dispatch(setImage(img))
  }

  const handlerDeletePhoto = (e: MouseEvent, img: string) => {
    e.stopPropagation()
    if (images.length === 1) {
      dispatch(setCloseModal(true))
    } else {
      dispatch(deleteAvatar(img))
    }
  }

  return (
    <Popover>
      <Popover.Panel className={classNames(clsG.popoverPanel, {}, [cls.popoverPanel])}>
        <div className={cls.itemContainer}>
          {images.map(el => (
            <div
              onClick={() => handlerCheckPhoto(el)}
              key={el}
              style={{ backgroundImage: `url(${el})` }}
              className={cls.item}
            >
              {currentImage === el && (
                <DeleteIcon
                  onClick={(event: MouseEvent) => handlerDeletePhoto(event, el)}
                  className={cls.deleteIcon}
                />
              )}
            </div>
          ))}
          <InputTypeFilePlus setSelectedImage={onChangePhoto} />
        </div>
      </Popover.Panel>

      <Popover.Button className={clsG.popoverButton}>
        <SelectGalleryIcon />
      </Popover.Button>
    </Popover>
  )
}
