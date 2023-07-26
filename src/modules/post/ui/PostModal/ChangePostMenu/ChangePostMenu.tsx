import { FC, memo, MouseEvent } from 'react'

import { ModalStatus } from '../PostModal'

import cls from './ChangePostMenu.module.scss'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface IChangePostMenuProps {
  onCloseModal: () => void
  changeStatus: (status: ModalStatus) => void
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

export const ChangePostMenu: FC<IChangePostMenuProps> = memo(({ onCloseModal, changeStatus }) => {
  const onClickContentHandler = (e: MouseEvent<HTMLUListElement>) => {
    e.stopPropagation()
  }

  const onOpenDeleteModal = () => {
    changeStatus('delete')
  }

  const onClickOpenEditModal = () => {
    changeStatus('edit')
  }

  return (
    <ul onClick={onClickContentHandler} className={cls.items}>
      <li onClick={onOpenDeleteModal} className={cls.item}>
        <Button theme={ButtonTheme.Clear}>Delete</Button>
      </li>
      <li onClick={onClickOpenEditModal} className={cls.item}>
        <Button theme={ButtonTheme.Clear}>Edit</Button>
      </li>
      {postModalItems.map(item => (
        <li className={cls.item} key={item.id}>
          {item.title}
        </li>
      ))}
      <li onClick={onCloseModal} className={cls.item}>
        <Button theme={ButtonTheme.Clear}>Cancel</Button>
      </li>
    </ul>
  )
})
