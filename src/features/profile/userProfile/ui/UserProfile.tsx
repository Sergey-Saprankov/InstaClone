import React, { useEffect, useState } from 'react'

import { LoaderContent } from '../../../../shared/ui/LoaderContent/LoaderContent'
import { SomethingWentWrong } from '../../../../shared/ui/SomethingWentWrong/SomethingWentWrong'

import cls from './UserProfile.module.scss'
import { UserProfileContent } from './UserProfileContent/UserProfileContent'
import { UserProfileHeader } from './UserProfileHeader/UserProfileHeader'

import { useGetPostsQuery } from 'modules/post/service/post'
import { useGetUserInfoQuery } from 'modules/user/service/user'
import { getUserId } from 'shared/hoc'
import { useAppSelector } from 'shared/hooks/useAppSelector'

export const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)

  const userId = useAppSelector(getUserId)
  const {
    data: profileData,
    isSuccess: isSuccessUser,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useGetUserInfoQuery()

  const useGetPostsQueryArg = {
    userId,
    page,
  }

  const {
    data: postsData,
    isSuccess: isSuccessPost,
    isLoading: isLoadingPosts,
    isFetching: isFetchingPosts,
    isError: isErrorPosts,
  } = useGetPostsQuery(useGetPostsQueryArg, {
    skip: !userId,
  })

  const changePostsPage = (nextPage: number) => {
    setPage(nextPage)
  }

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
            <UserProfileContent
              data={postsData}
              changePostsPage={changePostsPage}
              isFetchingPosts={isFetchingPosts}
            />
          </>
        )}
      </div>
    </div>
  )
}
