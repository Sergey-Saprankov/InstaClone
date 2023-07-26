import { FC, memo, useCallback, useState, MouseEvent } from 'react'

import Image from 'next/image'

import cls from './EditPost.module.scss'
import { EditPostEditor } from './EditPostEditor/EditPostEditor'
import { EditPostHeader } from './EditPostHeader/EditPostHeader'

import { useUpdatePostMutation } from 'modules/post/service/post'
import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import { TextArea } from 'shared/ui/TextArea/TextArea'

interface IEditPostProps {
  src: string
  alt: string
  descriptionPost: string
  onCloseModal: () => void
  currentId: number
}

export const EditPost: FC<IEditPostProps> = memo(
  ({ src, alt, descriptionPost, onCloseModal, currentId }) => {
    const [updatePost, { isLoading, isSuccess }] = useUpdatePostMutation()
    const [description, setDescriptionPost] = useState(descriptionPost)

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
      console.log(description)
      updatePost({ postId: currentId, description })
    }, [currentId, description])

    if (isLoading) return <LoaderContent isText className={cls.position} />
    if (isSuccess) {
      onCloseModal()
    }

    return (
      <div className={cls.ediPostModal} onClick={onClickContentHandler}>
        <EditPostHeader updatePostRequest={updatePostRequest} onCloseModal={onCloseModal} />
        <div className={cls.contentContainer}>
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
          <EditPostEditor description={description} onChangeDescription={onChangeDescription} />
        </div>
      </div>
    )
  }
)
