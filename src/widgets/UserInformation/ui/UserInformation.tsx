import React, { FC, memo } from 'react'

import Bookmark from '../../../../public/icon/bookmark.svg'
import Statistic from '../../../../public/icon/trending-up.svg'
import { useTranslation } from '../../../shared/hooks/useTranslation'
import { userInformationType } from '../../UserNavigation/ui/UserNavigation'

import cls from './UserInformation.module.scss'

import { PATH } from 'shared/const/path'
import { classNames } from 'shared/lib/classNames/classNames'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextFontTheme } from 'shared/ui/Text/Text'

interface UserInformationProps {
  className?: string
}

const userInformationList: userInformationType[] = [
  { id: '1', title: 'statistics', Icon: Statistic, href: PATH.STATISTICS },
  { id: '2', title: 'favorites', Icon: Bookmark, href: PATH.FAVORITES },
]

export const UserInformation: FC<UserInformationProps> = memo(({ className = '' }) => {
  const { t } = useTranslation()

  return (
    <ul className={classNames(cls.UserInformation, {}, [])}>
      {userInformationList.map(({ id, title, Icon, href }) => (
        <li key={id}>
          <NavLink href={href} color={NavLinkColor.PRIMARY} className={cls.navLink}>
            <Icon fill={'currentColor'} />
            <Text tag={'span'} font={TextFontTheme.INTER_MEDIUM_L} className={className}>
              {t.sidebar[title]}
            </Text>
          </NavLink>
        </li>
      ))}
    </ul>
  )
})
