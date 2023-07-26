import { FC, memo, MouseEvent } from 'react'

import cls from './DeletePost.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextFontTheme } from 'shared/ui/Text/Text'

interface IDeletePostProps {
  onCloseModal: () => void
  onDeletePost: () => void
}

export const DeletePost: FC<IDeletePostProps> = memo(({ onCloseModal, onDeletePost }) => {
  const onClickContentHandler = (e: MouseEvent<HTMLUListElement>) => {
    e.stopPropagation()
  }

  return (
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
      <li onClick={onCloseModal} className={cls.item}>
        <Button theme={ButtonTheme.Clear}>Cancel</Button>
      </li>
    </ul>
  )
})
