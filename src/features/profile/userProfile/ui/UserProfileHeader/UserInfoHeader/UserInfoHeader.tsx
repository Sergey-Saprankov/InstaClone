import React from 'react'

import { useRouter } from 'next/router'

import Star from '../../../../../../../public/icon/Star.svg'

import cls from './UserInfoHeader.module.scss'

import { useGetUserInfoQuery } from 'modules/user/service/user'
import { PATH } from 'shared/const/path'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const UserInfoHeader = () => {
  const { push } = useRouter()
  const { data } = useGetUserInfoQuery()

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
          Profile Settings
        </Text>
      </Button>
    </div>
  )
}
