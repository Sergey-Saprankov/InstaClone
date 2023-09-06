import { FC, memo, useCallback, useState, KeyboardEvent, useEffect } from 'react'

import Image from 'next/image'

import { useGetPostQuery } from '../service/post'

import cls from './Post.module.scss'
import { PostBody } from './PostBody/PostBody'
import { PostFooter } from './PostFooter/PostFooter'
import { PostHeader } from './PostHeader/PostHeader'

import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'
import { Modal } from 'shared/ui/Modal/Modal'
import { SlideCounter } from 'shared/ui/SlideCounter/SlideCounter'
import { Slider } from 'shared/ui/Slider/Slider'

interface PostProps {
  currentId: number
  callBack: (value: number | null) => void
  src: string[]
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
    const [currentImgIndex, setCurrentImgIndex] = useState<number>(0)
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

    const onChangePrevImageHandler = () => {
      setCurrentImgIndex(prev => prev - 1)
    }

    const onChangeNextImageHandler = () => {
      setCurrentImgIndex(prev => prev + 1)
    }

    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(Boolean(null))
          callBack(null)
          onChangeStep(0)
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
          <Slider
            currentIndex={currentIndex}
            endIndex={endIndex}
            onChangePrev={onChangePrevPostHandler}
            onChangeNext={onChangeNextPostHandler}
          />
          <div className={cls.imageContainer}>
            <Slider
              variant={'small'}
              currentIndex={currentImgIndex}
              endIndex={src.length - 1}
              onChangePrev={onChangePrevImageHandler}
              onChangeNext={onChangeNextImageHandler}
              width={24}
              height={24}
              widthIcon={12}
              heightIcon={12}
            />
            <Image
              sizes="(max-width: 309px) 100vw, 50vw"
              priority={true}
              src={src[currentImgIndex]}
              alt={alt}
              fill
              quality={100}
            />
            <SlideCounter length={src.length} currentIndex={currentImgIndex} />
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
                <PostBody description={description} />
                <PostFooter />
              </>
            )}
          </div>
        </div>
      </Modal>
    )
  }
)
