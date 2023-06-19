import { useState } from 'react'

import Arrow from '../../../../public/icon/arrow.svg'

import cls from './Sidebar.module.scss'

import { LogOutComponent } from 'features/auth/logOut/ui/LogOutComponent'
import { classNames } from 'shared/lib/classNames/classNames'
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
          <Arrow className={isOpen ? '' : cls.close} />
        </div>
        <UserNavigation className={isOpen ? cls.fontNone : cls.fontInherit} />
        <UserInformation className={isOpen ? cls.fontNone : cls.fontInherit} />
        <div className={cls.bottom}>
          <LogOutComponent className={isOpen ? cls.fontNone : cls.fontInherit} />
        </div>
      </div>
    </aside>
  )
}
