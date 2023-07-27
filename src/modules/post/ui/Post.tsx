import { FC, memo, useCallback, useState, KeyboardEvent, useEffect } from 'react'

import Image from 'next/image'

import Arrow from '../../../../public/icon/arrow.svg'
import { useGetPostQuery } from '../service/post'

import cls from './Post.module.scss'
import { PostBody } from './PostBody/PostBody'
import { PostFooter } from './PostFooter/PostFooter'
import { PostHeader } from './PostHeader/PostHeader'

import { classNames } from 'shared/lib/classNames/classNames'
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
    const { data: postData, isFetching } = useGetPostQuery(currentId, { skip: !currentId })
    const [isOpen, setIsOpen] = useState(Boolean(currentId))
    const description = postData?.description || ''

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
        <div className={cls.Post}>
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
            {isFetching ? (
              <LoaderContent isText={true} />
            ) : (
              <>
                <PostHeader
                  descriptionPost={description}
                  alt={alt}
                  src={src}
                  currentId={currentId}
                  onChangeOpenPost={onChangeOpen}
                />
                <PostBody currentId={currentId} description={description} />
                <PostFooter />
              </>
            )}
          </div>
        </div>
      </Modal>
    )
  }
)
