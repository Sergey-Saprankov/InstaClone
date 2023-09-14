import cls from './NotComment.module.scss'

import { Text, TextFontTheme } from 'shared/ui/Text/Text'

export const NotComments = () => {
  return (
    <div className={cls.NotComments}>
      <Text tag={'p'} font={TextFontTheme.INTER_SEMI_BOLD_XL}>
        No comments yet.
      </Text>
      <Text tag={'p'} font={TextFontTheme.INTER_REGULAR_L}>
        Start the conversation.
      </Text>
    </div>
  )
}
