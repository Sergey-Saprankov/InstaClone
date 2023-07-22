import { FC, memo, useCallback, useState } from 'react'

import Image from 'next/image'

import { useGetPostQuery } from '../service/post'

import cls from './Post.module.scss'

import { useGetProfileQuery } from 'features/profile/profileSetting/generalInformation/service/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'
import { Modal } from 'shared/ui/Modal/Modal'

interface PostProps {
  currentId: number
  callBack: (value: number | null, src: string) => void
  src: string
}

export const Post: FC<PostProps> = memo(({ currentId, callBack, src }) => {
  // const { data: userData } = useGetProfileQuery()
  const { data, isLoading } = useGetPostQuery(currentId, { skip: !currentId })
  const [isOpen, setIsOpen] = useState(Boolean(currentId))
  // const imageUrl = data?.images?.filter(el => el.width === 1440)[0].url ?? ''
  const alt = data?.description ?? ''
  // const userName = userData?.userName ?? ''
  // const avatar = userData?.avatars?.[0].url ?? ''
  const onChangeOpen = useCallback(() => {
    setIsOpen(Boolean(null))
    callBack(null, '')
  }, [])

  if (isLoading) return <Loader />

  return (
    <Modal callback={onChangeOpen} isOpen={isOpen}>
      <div className={cls.Post}>
        <>
          <div className={cls.imageContainer}>
            <Image
              sizes="(max-width: 309px) 100vw, 50vw"
              priority={true}
              src={src}
              alt={alt}
              fill
              quality={100}
            />
          </div>
          {/* <div className={cls.postContainer}>
              <PostHeader avatar={avatar} userName={userName} />
              <div className={cls.mainContent}></div>
              <div className={cls.otherBlock}></div>
              <PostMessage />
            </div> */}
        </>
      </div>
    </Modal>
  )
})
