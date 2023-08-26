import React, { FC } from 'react'

import Arrow from '../../../../public/icon/arrow.svg'
import { classNames } from '../../lib/classNames/classNames'

import cls from './Slider.module.scss'

interface ISliderProps {
  currentIndex: number
  endIndex: number
  onChangePrev: () => void
  onChangeNext: () => void
  width?: number
  height?: number
  heightIcon?: number
  widthIcon?: number
  className?: string
  variant?: 'default' | 'small'
}

export const Slider: FC<ISliderProps> = ({
  onChangePrev,
  onChangeNext,
  currentIndex,
  endIndex,
  heightIcon = 16,
  widthIcon = 12,
  width = 32,
  height = 32,
  variant = 'default',
  className = '',
}) => {
  const arrowLeftPosition =
    variant === 'default' ? cls.arrowLeftPosition : cls.arrowLeftPositionSmall
  const arrowRightPosition =
    variant === 'default' ? cls.arrowRightPosition : cls.arrowRightPositionSmall

  return (
    <>
      {currentIndex > 0 && (
        <div
          style={{ width: `${width}px`, height: `${height}px` }}
          onClick={onChangePrev}
          className={classNames(cls.decor, {}, [arrowLeftPosition, className])}
        >
          <Arrow
            width={widthIcon}
            height={heightIcon}
            className={classNames(cls.arrow, {}, [cls.rotate])}
          />
        </div>
      )}

      {currentIndex < endIndex && (
        <div
          style={{ width: `${width}px`, height: `${height}px` }}
          onClick={onChangeNext}
          className={classNames(cls.decor, {}, [arrowRightPosition, className])}
        >
          <Arrow width={widthIcon} height={heightIcon} className={classNames(cls.arrow, {}, [])} />
        </div>
      )}
    </>
  )
}
