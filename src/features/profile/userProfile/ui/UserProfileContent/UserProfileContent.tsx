import React, { useCallback, useEffect, useState } from 'react'

import { useInView } from 'react-intersection-observer'

import cls from './UserProfileContent.module.scss'

import { Post } from 'features/post/ui/Post'
import { useGetPostsQuery } from 'features/profile/userProfile/service/posts'
import { getUserId } from 'shared/hoc'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Card } from 'shared/ui/Card/Card'
import { Loader } from 'shared/ui/Loader/Loader'

export const UserProfileContent = () => {
  const [currentId, setCurrentId] = useState<null | number>(null)
  const [page, setPage] = useState<number>(1)

  const userId = useAppSelector(getUserId)

  const { data, isLoading } = useGetPostsQuery(userId, {
    skip: !userId,
  })

  const { ref, inView } = useInView()

  const getCurrentPostId = useCallback((id: number | null) => {
    setCurrentId(id)
  }, [])

  useEffect(() => {
    // console.log(page)
    // useGetPostsQuery({ userId, page });
  }, [page])

  useEffect(() => {
    if (inView) {
      setPage(prevPage => prevPage + 1)
    }
  }, [inView])

  if (isLoading) return <Loader />

  return (
    <>
      <div className={cls.UserProfileContent}>
        {data &&
          data?.items.map(el => (
            <Card
              id={el.id}
              key={el.id}
              callBack={getCurrentPostId}
              src={el.images[0].url}
              alt={el.description}
            />
          ))}
        {currentId && <Post callBack={getCurrentPostId} currentId={currentId} />}
      </div>
      <div ref={ref}></div>
    </>
  )
}
