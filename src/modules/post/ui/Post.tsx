import { log } from 'console'

import { FC, memo, useCallback, useState, KeyboardEvent, useEffect, useRef } from 'react'

import Image from 'next/image'

import Arrow from '../../../../public/icon/arrow.svg'
import { useGetPostQuery } from '../service/post'

import cls from './Post.module.scss'

import { useGetProfileQuery } from 'features/profile/profileSetting/generalInformation/service/profile'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Loader } from 'shared/ui/Loader/Loader'
import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'
import { Modal } from 'shared/ui/Modal/Modal'

interface PostProps {
  currentId: number
  callBack: (value: number | null) => void
  src: string
  alt: string
  onChangeStep: (value: number) => void
  step: number
  endIndex: number
  currentIndex: number
}

export const Post: FC<PostProps> = memo(
  ({ currentId, callBack, src, alt, onChangeStep, step, endIndex, currentIndex }) => {
    // const { data: userData } = useGetProfileQuery()
    const { data, isLoading } = useGetPostQuery(currentId, { skip: !currentId })
    const [isOpen, setIsOpen] = useState(Boolean(currentId))
    // const userName = userData?.userName ?? ''
    // const avatar = userData?.avatars?.[0].url ?? ''
    const onChangeOpen = useCallback(() => {
      setIsOpen(Boolean(null))
      callBack(null)
      onChangeStep(0)
    }, [])

    const onChangePrevPostHandler = () => {
      onChangeStep(--step)
    }

    const onChangeNextPostHandler = () => {
      onChangeStep(++step)
    }

    const onKeyDown = (e: KeyboardEvent) => {}

    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(Boolean(null))
          callBack(null)
          onChangeStep(0)
        }

        if (e.key === 'ArrowLeft') {
          if (currentIndex > 0) {
            onChangeStep(--step)
          }
        }

        if (e.key === 'ArrowRight') {
          if (currentIndex < endIndex) {
            onChangeStep(++step)
          }
        }
      }

      //@ts-ignore
      document.addEventListener('keydown', handleKeyPress)

      return () => {
        //@ts-ignore
        document.removeEventListener('keydown', handleKeyPress)
      }
    }, [currentIndex])

    return (
      <Modal callback={onChangeOpen} isOpen={isOpen}>
        <div onKeyDown={onKeyDown} className={cls.Post}>
          {currentIndex > 0 && (
            <div
              onClick={onChangePrevPostHandler}
              className={classNames(cls.decor, {}, [cls.arrowLeftPosition])}
            >
              <Arrow width={12} height={16} className={classNames(cls.arrow, {}, [cls.rotate])} />
            </div>
          )}

          {currentIndex < endIndex && (
            <div
              onClick={onChangeNextPostHandler}
              className={classNames(cls.decor, {}, [cls.arrowRightPosition])}
            >
              <Arrow width={12} height={16} className={classNames(cls.arrow, {}, [])} />
            </div>
          )}
          <div className={cls.imageContainer}>
            <Image
              sizes="(max-width: 309px) 100vw, 50vw"
              priority={true}
              src={src}
              alt={alt}
              fill
              quality={100}
            />
          </div>
          <div className={cls.postContainer}>
            {isLoading ? <LoaderContent isText={true} /> : <div></div>}
            {/* <PostHeader avatar={avatar} userName={userName} />
              <div className={cls.mainContent}></div>
              <div className={cls.otherBlock}></div>
              <PostMessage /> */}
          </div>
        </div>
      </Modal>
    )
  }
)
