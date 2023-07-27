import { FC } from 'react'

import Image from 'next/image'

import defaultAva from '../../../../../public/test/defaulAva.jpg'

import cls from './UserAvatarSmall.module.scss'

import { useGetUserInfoQuery } from 'modules/user/service/user'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

interface IUserAvatarSmall {
  className?: string
  description?: string
}

export const UserAvatarSmall: FC<IUserAvatarSmall> = ({ className = '', description }) => {
  const { data } = useGetUserInfoQuery()

  if (!data) return null

  const src = data.avatars[1]?.url || defaultAva
  const userName = data.userName

  return (
    <div className={classNames(cls.userInfo, {}, [className])}>
      <div className={cls.avatarContainer}>
        <Image src={src} alt={'user avatar'} width={38} height={38} />
      </div>
      <div>
        <Text
          className={cls.title}
          tag={'span'}
          font={TextFontTheme.INTER_BOLD_S}
          color={TextColorTheme.LIGHT}
        >
          {userName}
        </Text>
        <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.LIGHT}>
          {description}
        </Text>
      </div>
    </div>
  )
}
