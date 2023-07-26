import { MouseEvent, FC, memo, useState, useCallback } from 'react'

import { ChangePostMenu } from './ChangePostMenu/ChangePostMenu'
import { DeletePost } from './DeletePost/DeletePost'
import { EditPost } from './EditPost/EditPost'
import cls from './PostModal.module.scss'

import { useDeletePostMutation } from 'modules/post/service/post'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'
import { Text, TextFontTheme } from 'shared/ui/Text/Text'

interface IPostModal {
  callBack: () => void
  currentId: number
  onChangeOpenPost: () => void
  src: string
  alt: string
  descriptionPost: string
}

export type ModalStatus = 'list' | 'delete' | 'edit'

export const PostModal: FC<IPostModal> = memo(
  ({ callBack, currentId, onChangeOpenPost, src, alt, descriptionPost }) => {
    const [status, setStatus] = useState<ModalStatus>('list')
    const [deletePost, { isLoading: deletePostLoading, isSuccess }] = useDeletePostMutation()
    const onCloseHandler = () => {
      callBack()
    }

    const onChangeStatusModal = useCallback((status: ModalStatus) => {
      setStatus(status)
    }, [])

    const onDeletePost = useCallback(() => {
      deletePost(currentId)
    }, [currentId])

    const onClickContentHandler = (e: MouseEvent<HTMLUListElement>) => {
      e.stopPropagation()
    }

    if (deletePostLoading) return <LoaderContent isText className={cls.position} />
    if (isSuccess) {
      callBack()
      onChangeOpenPost()
    }

    return (
      <div onClick={onCloseHandler} className={cls.modal}>
        <div className={cls.content}>
          {status === 'list' && (
            <ChangePostMenu changeStatus={onChangeStatusModal} onCloseModal={callBack} />
          )}
          {status === 'delete' && (
            <DeletePost onDeletePost={onDeletePost} onCloseModal={callBack} />
          )}

          {status === 'edit' && (
            <EditPost
              currentId={currentId}
              onCloseModal={callBack}
              descriptionPost={descriptionPost}
              src={src}
              alt={alt}
            />
          )}
        </div>
      </div>
    )
  }
)
