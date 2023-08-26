import { FC } from 'react'

import { UserAvatarSmall } from '../../../user'

import { NotComments } from './NotComments/NotComment'
import cls from './PostBody.module.scss'

interface IPostBody {
  description: string
}

export const PostBody: FC<IPostBody> = ({ description }) => {
  return (
    <div className={cls.postBody}>
      {description.length ? (
        <UserAvatarSmall description={description} className={cls.userAvatarWrapper} />
      ) : (
        <NotComments />
      )}
    </div>
  )
}
