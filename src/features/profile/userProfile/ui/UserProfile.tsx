import React from 'react'
import { useGetPostsQuery } from '../service/posts'
import cls from './UserProfile.module.scss'
import { UserProfileContent } from './UserProfileContent/UserProfileContent'
import { UserProfileHeader } from './UserProfileHeader/UserProfileHeader'

import { useGetProfileQuery } from 'features/profile/profileSetting/generalInformation/service/profile'
import { getUserId } from 'shared/hoc'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Loader } from 'shared/ui/Loader/Loader'

export const UserProfile = () => {
  const userId = useAppSelector(getUserId)
  const { data: profileData, isLoading: profileLoading } = useGetProfileQuery()
  const { data: postsData, isLoading: postsLoading } = useGetPostsQuery(userId, {
    skip: !userId,
  })

  if (postsLoading || profileLoading) return <Loader />

  return (
    <div className={cls.container}>
      <div className={cls.innerWrapper}>
        <UserProfileHeader data={profileData} />
        <UserProfileContent data={postsData} />
      </div>
    </div>
  )
}
