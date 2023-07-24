import React from 'react'

import { useRouter } from 'next/router'

import Star from '../../../../../../../public/icon/Star.svg'
import { useTranslation } from '../../../../../../shared/hooks/useTranslation'

import cls from './UserInfoHeader.module.scss'

import { useGetProfileQuery } from 'features/profile/profileSetting/generalInformation/service/profile'
import { PATH } from 'shared/const/path'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const UserInfoHeader = () => {
  const { push } = useRouter()
  const { data } = useGetProfileQuery()

  const { t } = useTranslation()

  if (!data) return null

  const userName = data.userName

  return (
    <div className={cls.UserInfoHeader}>
      <div className={cls.userName}>
        <Text font={TextFontTheme.INTER_BOLD_XL} tag={'h2'} color={TextColorTheme.LIGHT}>
          {userName}
        </Text>
        <Star width={24} height={24} />
      </div>
      <Button
        onClick={() => push(PATH.PROFILE_SETTING)}
        theme={ButtonTheme.LIGHT}
        size={ButtonSize.L}
      >
        <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L}>
          {t.profile.profileSettings}
        </Text>
      </Button>
    </div>
  )
}
