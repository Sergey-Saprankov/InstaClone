import { FC, memo, useCallback, useState, MouseEvent } from 'react'

import Image from 'next/image'

import cls from './EditPost.module.scss'
import { EditPostEditor } from './EditPostEditor/EditPostEditor'
import { EditPostHeader } from './EditPostHeader/EditPostHeader'

import { useUpdatePostMutation } from 'modules/post/service/post'
import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'
import { SlideCounter } from 'shared/ui/SlideCounter/SlideCounter'
import { Slider } from 'shared/ui/Slider/Slider'

interface IEditPostProps {
  src: string[]
  alt: string
  descriptionPost: string
  onCloseModal: () => void
  currentId: number
}

export const EditPost: FC<IEditPostProps> = memo(
  ({ src, alt, descriptionPost, onCloseModal, currentId }) => {
    const [updatePost, { isLoading, isSuccess }] = useUpdatePostMutation()
    const [description, setDescriptionPost] = useState(descriptionPost)
    const [currentImgIndex, setCurrentImgIndex] = useState<number>(0)

    const onClickContentHandler = (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()
    }

    const onChangeDescription = useCallback(
      (value: string) => {
        setDescriptionPost(value)
      },
      [description]
    )

    const updatePostRequest = useCallback(() => {
      updatePost({ postId: currentId, description })
    }, [currentId, description])

    if (isLoading) return <LoaderContent isText className={cls.position} />
    if (isSuccess) {
      onCloseModal()
    }

    const onChangePrevImageHandler = () => {
      setCurrentImgIndex(prev => prev - 1)
    }

    const onChangeNextImageHandler = () => {
      setCurrentImgIndex(prev => prev + 1)
    }

    return (
      <div className={cls.ediPostModal} onClick={onClickContentHandler}>
        <EditPostHeader updatePostRequest={updatePostRequest} onCloseModal={onCloseModal} />
        <div className={cls.contentContainer}>
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
          <EditPostEditor description={description} onChangeDescription={onChangeDescription} />
        </div>
      </div>
    )
  }
)
