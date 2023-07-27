import { Text, TextFontTheme } from '../../../../../shared/ui/Text/Text'

import cls from './NotComment.module.scss'

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
