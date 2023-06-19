import { FC, memo } from 'react'

import Image from 'next/image'

import More from '../../../../../public/icon/more.svg'

import cls from './PostHeader.module.scss'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

interface PostHeaderProps {
  avatar: string
  userName: string
}
export const PostHeader: FC<PostHeaderProps> = memo(({ avatar, userName }) => {
  return (
    <header className={cls.PostHeader}>
      <div className={cls.userContainer}>
        <div className={cls.avatarContainer}>
          <Image
            sizes="(max-width: 60px) 100vw, 50vw"
            priority={true}
            src={avatar}
            alt={'avatar'}
            fill={true}
          />
        </div>
        <div className={cls.userName}>
          <Text tag={'span'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_REGULAR_M}>
            {userName}
          </Text>
        </div>
      </div>
      <Button theme={ButtonTheme.Clear}>
        <More />
      </Button>
    </header>
  )
})
