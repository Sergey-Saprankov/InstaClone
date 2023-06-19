import { useCallback } from 'react'

import cls from './SelectPhoto.module.scss'

import {
  setImage,
  setImagesAvatar,
} from 'features/profile/uploadPhoto/model/slice/uploadPhotoSlice'
import { Photo } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/SelectPhoto/Photo/Photo'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { InputTypeFile } from 'shared/ui/InputTypeFile/InputTypeFile'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const SelectPhoto = () => {
  const dispatch = useAppDispatch()
  const onChangePhoto = useCallback(
    (image: File) => {
      const imageUrl = URL.createObjectURL(image)

      dispatch(setImage(imageUrl))
      dispatch(setImagesAvatar(imageUrl))
    },
    [dispatch]
  )

  return (
    <div className={cls.SelectPhoto}>
      <header className={cls.header}>
        <Text tag={'h2'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
          Create new post
        </Text>
      </header>
      <div className={cls.selectContainer}>
        <div className={cls.description}>
          <Photo />
          <Text tag={'p'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
            Select a photo on your computer
          </Text>
        </div>

        <InputTypeFile setSelectedImage={onChangePhoto} />
      </div>
    </div>
  )
}

export default SelectPhoto
