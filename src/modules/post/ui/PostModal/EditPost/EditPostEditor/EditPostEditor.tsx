import { FC, memo, useTransition } from 'react'

import cls from './EditPostEditor.module.scss'

import { UserAvatarSmall } from 'modules/user'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import { TextArea } from 'shared/ui/TextArea/TextArea'

interface IEditPostEditorProps {
  description: string
  onChangeDescription: (value: string) => void
}

export const EditPostEditor: FC<IEditPostEditorProps> = memo(
  ({ description, onChangeDescription }) => {
    const { t } = useTranslation()

    return (
      <div className={cls.Publication}>
        <div className={cls.userInfo}>
          <UserAvatarSmall className={cls.mb20} />
        </div>
        <TextArea
          disabled={description.length > 500}
          onChange={onChangeDescription}
          value={description}
          className={cls.textArea}
          title={t.create.addPublicationDescriptions}
        />
        <Text
          className={cls.count}
          tag={'span'}
          font={TextFontTheme.INTER_REGULAR_M}
          color={TextColorTheme.LIGHT900}
        >
          {`${description.length} / 500`}
        </Text>
      </div>
    )
  }
)
