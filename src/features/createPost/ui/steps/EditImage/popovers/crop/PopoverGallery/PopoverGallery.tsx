import { useCallback, MouseEvent } from 'react'

import { Popover } from '@headlessui/react'

import DeleteIcon from '../../../../../../../../../public/icon/close.svg'
import SelectGalleryIcon from '../../../../../../../../../public/icon/select-gallery.svg'

import { InputTypeFilePlus } from './InputTypeFilePlus'
import cls from './PopoverGallery.module.scss'

import { getImages } from 'features/createPost/model/selectors/getImages/getImages'
import {
  deleteAvatar,
  setCloseModal,
  setCurrentImgIndex,
  setImages,
} from 'features/createPost/model/slice/uploadPhotoSlice'
import { Image } from 'features/createPost/model/types/uploadPhotoSchema'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { classNames } from 'shared/lib/classNames/classNames'

export const PopoverGallery = () => {
  const images = useAppSelector(getImages)
  const currentImgIndex = useAppSelector(state => state.uploadPhoto.currentImgIndex)
  const currentImage = images[currentImgIndex]
  const dispatch = useAppDispatch()

  const onChangePhoto = useCallback((images: FileList) => {
    const fileOrigin = images[0]
    const imageUrlOrigin = URL.createObjectURL(fileOrigin)

    const payload: Image = {
      imageUrlOrigin,
      imageUrlUpdate: imageUrlOrigin,
      filter: 'none',
      scale: 1,
      position: { x: 0, y: 0 },
    }

    dispatch(setImages(payload))
  }, [])

  const handlerSetImage = (index: number) => {
    dispatch(setCurrentImgIndex(index))
  }

  const handlerDeletePhoto = (e: MouseEvent, index: number) => {
    e.stopPropagation()
    if (images.length === 1) {
      dispatch(setCloseModal(true))
    } else {
      dispatch(deleteAvatar(index))
    }
  }

  return (
    <Popover>
      <Popover.Panel className={classNames(cls.popoverPanel, {}, [cls.popoverPanel])}>
        <div className={cls.itemContainer}>
          {images.map((el, i) => (
            <div
              onClick={() => handlerSetImage(i)}
              key={el.imageUrlOrigin}
              style={{ backgroundImage: `url(${el.imageUrlOrigin})` }}
              className={cls.item}
            >
              {currentImage?.imageUrlOrigin === el.imageUrlOrigin && (
                <DeleteIcon
                  onClick={(event: MouseEvent) => handlerDeletePhoto(event, i)}
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
