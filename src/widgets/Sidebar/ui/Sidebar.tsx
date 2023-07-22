import { useState } from 'react'

import Arrow from '../../../../public/icon/arrow.svg'

import cls from './Sidebar.module.scss'

import { LogOutComponent } from 'features/auth/logOut/ui/LogOutComponent'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import { UserInformation } from 'widgets/UserInformation/ui/UserInformation'
import { UserNavigation } from 'widgets/UserNavigation'

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const mods = {
    [cls.sidebarClose]: isOpen,
  }

  return (
    <aside className={classNames(cls.Sidebar, mods, [])}>
      <div className={cls.innerWrapper}>
        <div onClick={() => setIsOpen(prev => !prev)} className={cls.decor}>
          <Arrow width={'7'} height={'12'} className={isOpen ? '' : cls.close} />
        </div>
        <Text
          className={isOpen ? cls.fontNone : cls.text}
          tag={'h1'}
          font={TextFontTheme.INTER_SEMI_BOLD_XL}
          color={TextColorTheme.LIGHT}
        >
          Inctagram
        </Text>
        <div className={cls.mb50}></div>
        <UserNavigation className={isOpen ? cls.fontNone : cls.fontInherit} />
        <UserInformation className={isOpen ? cls.fontNone : cls.fontInherit} />
        <div className={cls.bottom}>
          <LogOutComponent className={isOpen ? cls.fontNone : cls.fontInherit} />
        </div>
      </div>
    </aside>
  )
}
