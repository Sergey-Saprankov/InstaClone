import React, { useState } from 'react'

import Image from 'next/image'

import Photo from '../../../../../../../public/icon/photo.svg'
import defaultPhoto from '../../../../../../../public/test/defaulAva.jpg'
import { LangSwitcher } from '../../../../../../widgets/LangSwitcher'

import cls from './profilePhotoBlock.module.scss'

import { useGetProfileQuery } from 'features/profile/profileSetting/generalInformation/service/profile'
import { SettingPhotoModal } from 'features/profile/profileSetting/photoSetting/ui/SettingPhotoModal/SettingPhotoModal'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'

export const ProfilePhotoBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const { data } = useGetProfileQuery()

  const url = data?.avatars[0]?.url || defaultPhoto

  return (
    <div className={cls.photoBlock}>
      <div className={cls.photo}>
        {url ? (
          <div className={cls.imageContainer}>
            <Image src={url || defaultPhoto} alt={'user avatar'} width={204} height={204} />
          </div>
        ) : (
          <Photo />
        )}
      </div>
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.addButton}
        size={ButtonSize.M}
        onClick={() => setIsModalOpen(true)}
      >
        Add a Profile Photo
      </Button>
      <SettingPhotoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <LangSwitcher className={cls.langSwitcher} />
    </div>
  )
}
