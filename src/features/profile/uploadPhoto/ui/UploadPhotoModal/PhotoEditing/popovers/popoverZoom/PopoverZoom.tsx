import { Popover } from '@headlessui/react'

import SelectZoomIcon from '../../../../../../../../../public/icon/select-zoom.svg'
import clsG from '../popovers.module.scss'

import cls from './PopoverZoom.module.scss'

import { SliderRange } from 'shared/ui/SliderRange/SliderRange'

type PropsType = {
  scale: number
  onScale: (scale: number) => void
}

export const PopoverZoom = ({ onScale, scale }: PropsType) => {
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
