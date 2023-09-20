import { useCallback } from 'react'

import cls from './Publication.module.scss'

import { getDescription } from 'features/createPost/model/selectors/getDescription/getDescription'
import { setDescriptionPost } from 'features/createPost/model/slice/uploadPhotoSlice'
import { UserAvatarSmall } from 'modules/user'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import { TextArea } from 'shared/ui/TextArea/TextArea'

export const Publication = () => {
  const description = useAppSelector(getDescription)
  const dispatch = useAppDispatch()

  const { t } = useTranslation()

  const onChangeDescription = useCallback(
    (value: string) => {
      if (description.length < 500) {
        dispatch(setDescriptionPost(value))
      }
    },
    [dispatch, description]
  )

  return (
    <div className={cls.Publication}>
      <UserAvatarSmall className={cls.mb20} />
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
