import { useCallback, MouseEvent } from 'react'

import { Popover } from '@headlessui/react'

import DeleteIcon from '../../../../../../../../../public/icon/close.svg'
import SelectGalleryIcon from '../../../../../../../../../public/icon/select-gallery.svg'

import { InputTypeFilePlus } from './InputTypeFilePlus'
import cls from './PopoverGallery.module.scss'

import { getImage } from 'features/createPost/model/selectors/getImage/getImage'
import { getImagesAvatar } from 'features/createPost/model/selectors/getImagesAvatar/getImagesAvatar'
import {
  deleteAvatar,
  setCloseModal,
  setImage,
  setImages,
} from 'features/createPost/model/slice/uploadPhotoSlice'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { classNames } from 'shared/lib/classNames/classNames'

export const PopoverGallery = () => {
  const currentImage = useAppSelector(getImage)
  const images: [any] = useAppSelector(getImagesAvatar)
  const dispatch = useAppDispatch()

  const onChangePhoto = useCallback((images: FileList) => {
    const imagesArrUrl = [] as string[]

    for (const key in images) {
      if (/[0-9]/.test(key)) {
        imagesArrUrl.push(URL.createObjectURL(images[0]))
      }
    }

    dispatch(setImages(imagesArrUrl))
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
      <Popover.Panel className={classNames(cls.popoverPanel, {}, [cls.popoverPanel])}>
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

      <Popover.Button className={cls.popoverButton}>
        <SelectGalleryIcon />
      </Popover.Button>
    </Popover>
  )
}
