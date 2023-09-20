import React, { FC, memo } from 'react'

import Home from '../../../../public/icon/home.svg'
import Message from '../../../../public/icon/message.svg'
import Person from '../../../../public/icon/person.svg'
import { LocaleSidebarType } from '../../../../public/locales/ru'

import s from './UserNavigation.module.scss'

import { CreatePost } from 'features/createPost'
import { PATH } from 'shared/const/path'
import { useTranslation } from 'shared/hooks/useTranslation'
import { classNames } from 'shared/lib/classNames/classNames'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextFontTheme } from 'shared/ui/Text/Text'
import cls from 'widgets/UserInformation/ui/UserInformation.module.scss'

export type userInformationType = {
  id: string
  title: keyof LocaleSidebarType
  Icon: any
  href: string
}

const userInformationList: userInformationType[] = [
  { id: '1', title: 'home', Icon: Home, href: PATH.HOME },
  { id: '3', title: 'myProfile', Icon: Person, href: PATH.PROFILE },
  { id: '2', title: 'message', Icon: Message, href: '#' },
]

interface UserNavigationProps {
  className?: string
}

export const UserNavigation: FC<UserNavigationProps> = memo(({ className = '' }) => {
  const { t } = useTranslation()

  return (
    <ul className={classNames(cls.UserInformation, {}, [s.UserNavigation])}>
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
      <li>
        <CreatePost className={className} />
      </li>
    </ul>
  )
})
