import { Popover } from '@headlessui/react'

import SelectZoomIcon from '../../../../../../../../../public/icon/select-zoom.svg'
import clsG from '../popovers.module.scss'

import cls from './PopoverZoom.module.scss'

import { setScale } from 'features/createPost/model/slice/uploadPhotoSlice'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { SliderRange } from 'shared/ui/SliderRange/SliderRange'

type PropsType = {
  scale: number
}

export const PopoverZoom = ({ scale }: PropsType) => {
  const dispatch = useAppDispatch()

  const onScale = (scale: number) => {
    dispatch(setScale(scale))
  }

  return (
    <Popover>
      <Popover.Panel className={clsG.popoverPanel}>
        <div className={cls.item}>
          <SliderRange scale={scale} onScale={onScale} />
        </div>
      </Popover.Panel>

      <Popover.Button className={clsG.popoverButton}>
        <SelectZoomIcon />
      </Popover.Button>
    </Popover>
  )
}
