import React, { FC, memo } from 'react'

import Image from 'next/image'

import defaultPhoto from '../../../../../../public/test/defaulAva.jpg'

import { UserInfoHeader } from './UserInfoHeader/UserInfoHeader'
import cls from './UserProfileHeader.module.scss'
import { UserStats } from './UserStats/UserStats'

import { ProfileParamsType } from 'modules/user/service/types'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

interface IUserProfileHeaderProps {
  data?: ProfileParamsType
}

export const UserProfileHeader: FC<IUserProfileHeaderProps> = memo(({ data }) => {
  const url = data?.avatars[0]?.url || defaultPhoto

  return (
    <div className={cls.UserProfileHeader}>
      <div className={cls.avatarContainer}>
        <Image src={url || defaultPhoto} alt={'user avatar'} width={204} height={204} />
      </div>
      <div className={cls.userProfileInfoContainer}>
        <UserInfoHeader />
        <UserStats />
        <div className={cls.description}>
          <Text tag={'p'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.LIGHT}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ex itaque rem
            reprehenderit, sint vitae? Aliquid animi dicta neque odit perferendis? Ab aspernatur
            distinctio illo natus non, rem ullam veritatis?
          </Text>
        </div>
      </div>
    </div>
  )
})
