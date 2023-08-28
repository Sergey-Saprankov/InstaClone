import { FC } from 'react'

import Arrow from '../../../../../../../../public/icon/arrow.svg'

import cls from './ArrowSlide.module.scss'

import { setCurrentImgIndex } from 'features/createPost/model/slice/uploadPhotoSlice'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { classNames } from 'shared/lib/classNames/classNames'

interface IArrowSlide {
  variant: 'left' | 'right'
  currentIndex: number
}

export const ArrowSlide: FC<IArrowSlide> = ({ variant, currentIndex }) => {
  const dispatch = useAppDispatch()

  const handleSetCurrentIndex = () => {
    if (variant === 'left') {
      dispatch(setCurrentImgIndex(--currentIndex))
    } else {
      dispatch(setCurrentImgIndex(++currentIndex))
    }
  }

  const modsButton = {
    [cls.arrowLeft]: variant === 'left',
    [cls.arrowRight]: variant === 'right',
  }

  const modsIcon = {
    [cls.rotateIcon]: variant === 'left',
  }

  return (
    <button className={classNames(cls.btn, modsButton)} onClick={handleSetCurrentIndex}>
      <Arrow className={classNames(cls.arrow, modsIcon)} />
    </button>
  )
}
