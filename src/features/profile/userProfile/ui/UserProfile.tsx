import React from 'react'

import cls from './UserProfile.module.scss'
import { UserProfileContent } from './UserProfileContent/UserProfileContent'
import { UserProfileHeader } from './UserProfileHeader/UserProfileHeader'

export const UserProfile = () => {
  return (
    <div className={cls.container}>
      <div className={cls.innerWrapper}>
        <UserProfileHeader />
        <UserProfileContent />
      </div>
    </div>
  )
}
