import { FC, memo } from 'react'

import Image from 'next/image'

import { CarouselIcon } from '../CarouselIcon/CarouselIcon'

import cls from './Card.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface CardProps {
  className?: string
  id: number
  src: string
  alt: string
  callBack: (value: number) => void
  withIcon: boolean
}

export const Card: FC<CardProps> = memo(({ className = '', id, src, alt, callBack, withIcon }) => {
  const onClickHandler = () => {
    callBack(id)
  }

  return (
    <div onClick={onClickHandler} className={classNames(cls.Card, {}, [className])}>
      <Image
        sizes="(max-width: 309px) 100vw, 50vw"
        priority={true}
        src={src}
        alt={alt}
        fill
        quality={100}
        className={cls.cardItem}
      />
      {withIcon && <CarouselIcon />}
    </div>
  )
})
