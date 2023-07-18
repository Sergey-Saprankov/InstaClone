import React, { FC, memo, useCallback, useEffect, useState } from 'react'

import { useInView } from 'react-intersection-observer'

import { PostsResponse } from '../../service/types'

import cls from './UserProfileContent.module.scss'

import { Post } from 'features/post/ui/Post'
import { getUserId } from 'shared/hoc'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Card } from 'shared/ui/Card/Card'

interface IUserProfileContentProps {
  data?: PostsResponse
}

export const UserProfileContent: FC<IUserProfileContentProps> = memo(({ data }) => {
  const [currentId, setCurrentId] = useState<null | number>(null)
  const [page, setPage] = useState<number>(1)

  const userId = useAppSelector(getUserId)

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

  return (
    <>
      <div className={cls.UserProfileContent}>
        {data &&
          data.items.map(({ id, images, description }) => {
            const mutableArray = [...images]

            mutableArray.sort((a, b) => a.width - b.width)
            const src = mutableArray[1].url

            return (
              <Card
                id={id}
                key={id}
                callBack={getCurrentPostId}
                src={src}
                alt={description ? description : 'post'}
              />
            )
          })}
        {currentId && <Post callBack={getCurrentPostId} currentId={currentId} />}
      </div>
      <div ref={ref}></div>
    </>
  )
})
