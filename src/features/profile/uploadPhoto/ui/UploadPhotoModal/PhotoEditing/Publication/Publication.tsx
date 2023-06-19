import { useCallback } from 'react'

import Image from 'next/image'

import defaultAva from '../../../../../../../../public/test/defaulAva.jpg'

import cls from './Publication.module.scss'

import { useGetProfileQuery } from 'features/profile/profileSetting/generalInformation/service/profile'
import { getDescription } from 'features/profile/uploadPhoto/model/selectors/getDescription/getDescription'
import { setDescriptionPost } from 'features/profile/uploadPhoto/model/slice/uploadPhotoSlice'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import { TextArea } from 'shared/ui/TextArea/TextArea'

export const Publication = () => {
  const description = useAppSelector(getDescription)
  const dispatch = useAppDispatch()
  const { data } = useGetProfileQuery()

  const onChangeDescription = useCallback(
    (value: string) => {
      if (description.length < 500) {
        dispatch(setDescriptionPost(value))
      }
    },
    [dispatch, description]
  )

  if (!data) return null

  const src = data.avatars[1]?.url || defaultAva
  const userName = data.userName

  return (
    <div className={cls.Publication}>
      <div className={cls.userInfo}>
        <div className={cls.avatarContainer}>
          <Image src={src} alt={'user avatar'} width={38} height={38} />
        </div>
        <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.LIGHT}>
          {userName}
        </Text>
      </div>
      <TextArea
        disabled={description.length > 500}
        onChange={onChangeDescription}
        value={description}
        className={cls.textArea}
        title={'Add publication descriptions'}
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
