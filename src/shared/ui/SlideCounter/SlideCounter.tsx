import React, { FC } from 'react'

import { classNames } from '../../lib/classNames/classNames'

import cls from './SlideCounter.module.scss'

interface ISlideCounter {
  length: number
  currentIndex: number
}

export const SlideCounter: FC<ISlideCounter> = ({ length, currentIndex }) => {
  const count = new Array(length).fill(null)

  return (
    <div className={cls.container}>
      {length > 1 &&
        count.map((el, index) => {
          const mods = {
            [cls.isActive]: currentIndex === index,
          }

          return <div className={classNames(cls.block, mods, [])} key={index}></div>
        })}
    </div>
  )
}
