import React, { FC, memo, useCallback, useState } from 'react'

import { useInView } from 'react-intersection-observer'

import { PostsResponse } from '../../service/types'

import { PostsLoader } from './PostsLoader'
import cls from './UserProfileContent.module.scss'

import { Post } from 'modules/post'
import { getCurrentPostData } from 'shared/lib/getCurrentPostData/getCurrentPostData'
import { Card } from 'shared/ui/Card/Card'

interface IUserProfileContentProps {
  data?: PostsResponse
  isFetchingPosts: boolean
}

export const UserProfileContent: FC<IUserProfileContentProps> = memo(
  ({ data, isFetchingPosts }) => {
    const [currentId, setCurrentId] = useState<null | number>(null)
    const [step, setStep] = useState<number>(0)

    if (!data) return null

    const { items } = data
    const index = items.findIndex(item => item.id === currentId)

    const currentPostData = getCurrentPostData(items, index, step)

    const { ref, inView } = useInView()

    const getCurrentPostId = useCallback((id: number | null) => {
      setCurrentId(id)
    }, [])

    const onChangeStep = useCallback((value: number) => {
      setStep(value)
    }, [])

    return (
      <>
        <div className={cls.UserProfileContent}>
          {data &&
            data.items.map(({ id, images, description }) => {
              const filteredImage = images.filter(el => el.width === 1440)
              const src = filteredImage[0].url

              return (
                <Card
                  withIcon={filteredImage.length > 1}
                  id={id}
                  key={id}
                  callBack={getCurrentPostId}
                  src={src}
                  alt={description ? description : 'post'}
                />
              )
            })}

          {currentPostData && (
            <Post
              currentIndex={currentPostData.currentIndex}
              step={step}
              endIndex={currentPostData.lastPostIndex}
              onChangeStep={onChangeStep}
              alt={currentPostData.alt}
              src={currentPostData.src}
              callBack={getCurrentPostId}
              currentId={currentPostData.id}
            />
          )}
        </div>
        <div className={cls.loaderContainer}>{isFetchingPosts && <PostsLoader />}</div>
        <div ref={ref}></div>
      </>
    )
  }
)
