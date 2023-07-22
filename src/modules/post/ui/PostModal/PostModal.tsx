import { MouseEvent, FC, memo, useState } from 'react'

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
}

const postModalItems = [
  { id: 3, title: 'Hide like count' },
  { id: 4, title: 'Turn off commenting' },
  { id: 5, title: 'Go to post' },
  { id: 6, title: 'Share to' },
  { id: 7, title: 'Copy link' },
  { id: 8, title: 'Embed' },
  { id: 9, title: 'About this account' },
]

export const PostModal: FC<IPostModal> = memo(({ callBack, currentId, onChangeOpenPost }) => {
  const [isDeletePost, setIsDeletePost] = useState(false)
  const [isEditPost, setIsEditPost] = useState(false)
  const [deletePost, { isLoading: deletePostLoading, isSuccess }] = useDeletePostMutation()
  const onCloseHandler = () => {
    callBack()
  }

  const onClickContentHandler = (e: MouseEvent<HTMLUListElement>) => {
    e.stopPropagation()
  }

  const onOpenDeleteModal = () => {
    setIsDeletePost(true)
  }

  const onDeletePost = () => {
    setIsDeletePost(false)
    deletePost(currentId).unwrap
  }

  if (deletePostLoading) return <LoaderContent isText className={cls.position} />
  if (isSuccess) {
    callBack()
    onChangeOpenPost()
  }

  return (
    <div onClick={onCloseHandler} className={cls.modal}>
      <div className={cls.content}>
        {!isDeletePost && (
          <ul onClick={onClickContentHandler} className={cls.items}>
            <li onClick={onOpenDeleteModal} className={cls.item}>
              <Button theme={ButtonTheme.Clear}>Delete</Button>
            </li>
            <li className={cls.item}>
              <Button theme={ButtonTheme.Clear}>Edit</Button>
            </li>
            {postModalItems.map(item => (
              <li className={cls.item} key={item.id}>
                {item.title}
              </li>
            ))}
            <li onClick={onCloseHandler} className={cls.item}>
              <Button theme={ButtonTheme.Clear}>Cancel</Button>
            </li>
          </ul>
        )}
        {isDeletePost && (
          <ul onClick={onClickContentHandler} className={cls.items}>
            <div className={cls.deleteModalHeader}>
              <Text tag={'h3'} font={TextFontTheme.INTER_REGULAR_L}>
                Delete Post ?
              </Text>
              <Text tag={'p'} font={TextFontTheme.INTER_REGULAR_M}>
                Are you sure you want delete this post ?
              </Text>
            </div>

            <li onClick={onDeletePost} className={classNames(cls.item, {}, [cls.danger])}>
              <Button theme={ButtonTheme.Clear}>Delete</Button>
            </li>
            <li onClick={onCloseHandler} className={cls.item}>
              <Button theme={ButtonTheme.Clear}>Cancel</Button>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
})
