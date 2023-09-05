import Comment from '../../../../../public/icon/comment.svg'
import Emoji from '../../../../../public/icon/emoji.svg'
import Like from '../../../../../public/icon/like.svg'
import Save from '../../../../../public/icon/save.svg'

import cls from './PostFooter.module.scss'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { TextArea, TextAreaTheme } from 'shared/ui/TextArea/TextArea'

export const PostFooter = () => {
  return (
    <>
      <div className={cls.postFooter}>
        <div className={cls.reactionWrapperInner}>
          <Like className={cls.icon} />
          <Comment className={cls.icon} />
        </div>
        <Save className={cls.icon} />
      </div>

      <div className={cls.postFooter}>
        <Emoji className={cls.icon} />
        <TextArea
          theme={TextAreaTheme.DARK}
          placeholder={'Add a comment...'}
          className={cls.textArea}
        />
        <Button theme={ButtonTheme.Clear} className={cls.btn}>
          Post
        </Button>
      </div>
    </>
  )
}
