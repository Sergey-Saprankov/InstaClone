import { RefObject } from 'react'

import { Popover } from '@headlessui/react'

import SelectCrop1_1 from '../../../../../../../../../public/icon/select-crop-1-1.svg'
import SelectCrop16_9 from '../../../../../../../../../public/icon/select-crop-16-9.svg'
import SelectCrop4_5 from '../../../../../../../../../public/icon/select-crop-4-5.svg'
import SelectCropOriginal from '../../../../../../../../../public/icon/select-crop-original.svg'
import SelectCropIcon from '../../../../../../../../../public/icon/select-crop.svg'
import clsG from '../popovers.module.scss'

import cls from './PopoverCrop.module.scss'

import { useTranslation } from 'shared/hooks/useTranslation'

type PropsType = {
  parentRef: RefObject<HTMLDivElement>
  callBack: (width: number, height: number, crop: number | undefined) => void
}

export const PopoverCrop = ({ parentRef, callBack }: PropsType) => {
  const { t } = useTranslation()

  const popoverData = [
    { id: 1, value: undefined, title: t.create.original, Icon: SelectCropOriginal },
    { id: 2, value: 1, title: '1:1', Icon: SelectCrop1_1 },
    { id: 3, value: 4 / 5, title: '4:5', Icon: SelectCrop4_5 },
    { id: 4, value: 16 / 9, title: '16:9', Icon: SelectCrop16_9 },
  ]

  const handlerCrop = (aspectRatio: number | undefined) => {
    const parentElement = parentRef.current

    if (parentElement) {
      const parentWidth = parentElement.offsetWidth
      const parentHeight = parentElement.offsetHeight

      let newWidth = parentWidth
      let newHeight = parentHeight

      if (aspectRatio) {
        if (parentWidth / parentHeight > aspectRatio) {
          newWidth = parentHeight * aspectRatio
          newHeight = parentHeight
        } else {
          newWidth = parentWidth
          newHeight = parentWidth / aspectRatio
        }
      }
      callBack(newWidth, newHeight, undefined)
    }
  }

  return (
    <Popover className={clsG.popover}>
      <Popover.Panel className={clsG.popoverPanel}>
        {popoverData.map(el => (
          <button key={el.id} onClick={() => handlerCrop(el.value)} className={cls.item}>
            {el.title}
            <el.Icon />
          </button>
        ))}
      </Popover.Panel>

      <Popover.Button className={clsG.popoverButton}>
        <SelectCropIcon />
      </Popover.Button>
    </Popover>
  )
}
