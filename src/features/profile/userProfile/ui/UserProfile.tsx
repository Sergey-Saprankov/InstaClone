import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { PATH } from '../../../../shared/const/path'
import { LoaderContent } from '../../../../shared/ui/LoaderContent/LoaderContent'
import { SomethingWentWrong } from '../../../../shared/ui/SomethingWentWrong/SomethingWentWrong'
import { useGetPostsQuery } from '../service/posts'

import cls from './UserProfile.module.scss'
import { UserProfileContent } from './UserProfileContent/UserProfileContent'
import { UserProfileHeader } from './UserProfileHeader/UserProfileHeader'

import { useGetUserInfoQuery } from 'modules/user/service/user'
import { getUserId } from 'shared/hoc'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Loader } from 'shared/ui/Loader/Loader'

export const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true)
  const userId = useAppSelector(getUserId)
  const {
    data: profileData,
    isSuccess: isSuccessUser,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useGetUserInfoQuery()
  const {
    data: postsData,
    isSuccess: isSuccessPost,
    isLoading: isLoadingPosts,
    isError: isErrorPosts,
  } = useGetPostsQuery(userId, {
    skip: !userId,
  })

  useEffect(() => {
    if (!isLoadingUser && !isLoadingPosts) setIsLoading(false)
  }, [isLoadingPosts, isLoadingUser])

  return (
    <div className={cls.container}>
      <div className={cls.innerWrapper}>
        {isLoading && <LoaderContent isText />}
        {(isErrorPosts || isErrorUser) && <SomethingWentWrong />}
        {isSuccessPost && isSuccessUser && (
          <>
            <UserProfileHeader data={profileData} />
            <UserProfileContent data={postsData} />
          </>
        )}
      </div>
    </div>
  )
}
