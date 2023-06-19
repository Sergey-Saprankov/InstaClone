import React, { FC, memo } from 'react'

import Bookmark from '../../../../public/icon/bookmark.svg'
import Statistic from '../../../../public/icon/trending-up.svg'

import cls from './UserInformation.module.scss'

import { PATH } from 'shared/const/path'
import { classNames } from 'shared/lib/classNames/classNames'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextFontTheme } from 'shared/ui/Text/Text'

interface UserInformationProps {
  className?: string
}

const userInformationList = [
  { id: '1', title: 'Statistics', Icon: Statistic, href: PATH.STATISTICS },
  { id: '2', title: 'Favorites', Icon: Bookmark, href: PATH.FAVORITES },
]

export const UserInformation: FC<UserInformationProps> = memo(({ className = '' }) => {
  return (
    <ul className={classNames(cls.UserInformation, {}, [])}>
      {userInformationList.map(({ id, title, Icon, href }) => (
        <li key={id}>
          <NavLink href={href} color={NavLinkColor.PRIMARY} className={cls.navLink}>
            <Icon fill={'currentColor'} />
            <Text tag={'span'} font={TextFontTheme.INTER_MEDIUM_L} className={className}>
              {title}
            </Text>
          </NavLink>
        </li>
      ))}
    </ul>
  )
})
