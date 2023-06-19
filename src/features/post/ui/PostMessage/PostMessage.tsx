import cls from './PostMessage.module.scss'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import { TextArea, TextAreaTheme } from 'shared/ui/TextArea/TextArea'

export const PostMessage = () => {
  return (
    <div className={cls.PostMessage}>
      <TextArea
        theme={TextAreaTheme.DARK}
        className={cls.textArea}
        placeholder={'Add Comment...'}
      />
      <Button theme={ButtonTheme.Clear}>
        <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.PRIMARY}>
          Publish
        </Text>
      </Button>
    </div>
  )
}
