import { FC, memo, useCallback, useState } from 'react'

import Edit from '../../../../../public/icon/more.svg'
import { PostModal } from '../PostModal/PostModal'

import cls from './PostHeader.module.scss'

import { UserAvatarSmall } from 'modules/user'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface IPostHeader {
  currentId: number
  onChangeOpenPost: () => void
  src: string
  alt: string
  descriptionPost: string
}

export const PostHeader: FC<IPostHeader> = memo(
  ({ currentId, onChangeOpenPost, src, alt, descriptionPost }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const onClickHandler = () => {
      setIsOpen(true)
    }

    const onChangeOpenModal = useCallback(() => {
      setIsOpen(false)
    }, [])

    return (
      <header className={cls.postHeader}>
        <div className={cls.innerWrapper}>
          <UserAvatarSmall />
          <Button onClick={onClickHandler} theme={ButtonTheme.Clear}>
            <Edit className={cls.more} />
          </Button>
        </div>
        {isOpen && (
          <PostModal
            src={src}
            alt={alt}
            currentId={currentId}
            onChangeOpenPost={onChangeOpenPost}
            callBack={onChangeOpenModal}
            descriptionPost={descriptionPost}
          />
        )}
      </header>
    )
  }
)
