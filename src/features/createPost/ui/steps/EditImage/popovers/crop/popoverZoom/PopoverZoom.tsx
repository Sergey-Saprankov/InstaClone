import { Popover } from '@headlessui/react'

import SelectZoomIcon from '../../../../../../../../../public/icon/select-zoom.svg'
import clsG from '../popovers.module.scss'

import cls from './PopoverZoom.module.scss'

import { getImages } from 'features/createPost/model/selectors/getImages/getImages'
import { setScale } from 'features/createPost/model/slice/uploadPhotoSlice'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { SliderRange } from 'shared/ui/SliderRange/SliderRange'

export const PopoverZoom = () => {
  const dispatch = useAppDispatch()
  const images = useAppSelector(getImages)
  const currentImgIndex = useAppSelector(state => state.uploadPhoto.currentImgIndex)
  const currentImage = images[currentImgIndex]

  const onScale = (scale: number) => {
    dispatch(setScale({ currentImgIndex, scale }))
  }

  return (
    <Popover>
      <Popover.Panel className={clsG.popoverPanel}>
        <div className={cls.item}>
          <SliderRange scale={currentImage.scale as number} onScale={onScale} />
        </div>
      </Popover.Panel>

      <Popover.Button className={clsG.popoverButton}>
        <SelectZoomIcon />
      </Popover.Button>
    </Popover>
  )
}
