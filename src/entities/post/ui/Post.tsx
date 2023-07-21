import { FC, memo, useCallback, useState } from 'react'

import Image from 'next/image'

import { useGetPostQuery } from '../service/post'

import cls from './Post.module.scss'

import { useGetProfileQuery } from 'features/profile/profileSetting/generalInformation/service/profile'
import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'
import { Modal } from 'shared/ui/Modal/Modal'

interface PostProps {
  currentId: number
  callBack: (value: number | null) => void
}

export const Post: FC<PostProps> = memo(({ currentId, callBack }) => {
  const { data: userData } = useGetProfileQuery()
  const { data, isLoading } = useGetPostQuery(currentId, { skip: !currentId })
  const [isOpen, setIsOpen] = useState(Boolean(currentId))
  const imageUrl = data?.images?.filter(el => el.width === 1440)[0].url ?? ''
  const alt = data?.description ?? ''
  const userName = userData?.userName ?? ''
  const avatar = userData?.avatars?.[0].url ?? ''
  const onChangeOpen = useCallback(() => {
    setIsOpen(Boolean(null))
    callBack(null)
  }, [])

  return (
    <Modal callback={onChangeOpen} isOpen={isOpen}>
      {isLoading && <LoaderContent isText={true} className={cls.loader} />}
      <div className={cls.Post}>
        {!isLoading && (
          <>
            <div className={cls.imageContainer}>
              <Image
                sizes="(max-width: 600px) 100vw, 50vw"
                priority={true}
                src={imageUrl}
                alt={alt}
                fill={true}
              />
            </div>
            {/* <div className={cls.postContainer}>
              <PostHeader avatar={avatar} userName={userName} />
              <div className={cls.mainContent}></div>
              <div className={cls.otherBlock}></div>
              <PostMessage />
            </div> */}
          </>
        )}
      </div>
    </Modal>
  )
})
