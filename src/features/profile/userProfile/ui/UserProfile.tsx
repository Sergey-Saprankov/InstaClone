import React from 'react'

import cls from './UserProfile.module.scss'
import { UserProfileContent } from './UserProfileContent/UserProfileContent'
import { UserProfileHeader } from './UserProfileHeader/UserProfileHeader'
import { useGetPostsQuery } from '../service/posts'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { getUserId } from 'shared/hoc'
import { Loader } from 'shared/ui/Loader/Loader'
import { useGetProfileQuery } from 'features/profile/profileSetting/generalInformation/service/profile'

export const UserProfile = () => {
  const userId = useAppSelector(getUserId)
  const { data: profileData, isLoading: profileLoading } = useGetProfileQuery()
  const { data: postData, isLoading: postsLoading } = useGetPostsQuery(userId, {
    skip: !userId,
  })

  if (postsLoading || profileLoading) return <Loader />
  
  return (
    <div className={cls.container}>
      <div className={cls.innerWrapper}>
        <UserProfileHeader data={profileData} />
        <UserProfileContent data={postData} />
      </div>
    </div>
  )
}
