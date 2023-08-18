import { RefObject, FC } from 'react'

import { PopoverCrop } from './PopoverCrop/PopoverCrop'
import { PopoverGallery } from './PopoverGallery/PopoverGallery'
import cls from './PopoversCrop.module.scss'
import { PopoverZoom } from './popoverZoom/PopoverZoom'

import { setCrop, setHeight, setWidth } from 'features/createPost/model/slice/uploadPhotoSlice'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'

interface IPopoversCrop {
  parentRef: RefObject<HTMLDivElement>
}

export const PopoversCrop: FC<IPopoversCrop> = ({ parentRef }) => {
  const dispatch = useAppDispatch()
  const scale = useAppSelector(state => state.uploadPhoto.scale)

  const onChangeParam = (width: number, height: number, crop: number | undefined) => {
    dispatch(setCrop(crop))
    dispatch(setHeight(height))
    dispatch(setWidth(width))
  }

  return (
    <div className={cls.popup}>
      <div className={cls.popupCol}>
        <PopoverCrop parentRef={parentRef} callBack={onChangeParam} />
        <PopoverZoom scale={scale} />
      </div>
      <PopoverGallery />
    </div>
  )
}
