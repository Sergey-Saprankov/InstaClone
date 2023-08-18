import { useCallback } from 'react'

import { useTranslation } from '../../../../../shared/hooks/useTranslation'

import cls from './SelectImage.module.scss'

import { setImage, setImagesAvatar } from 'features/createPost/model/slice/uploadPhotoSlice'
import { Image } from 'features/createPost/ui/steps/SelectImage/Image/Image'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { InputTypeFile } from 'shared/ui/InputTypeFile/InputTypeFile'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const SelectImage = () => {
  const dispatch = useAppDispatch()
  const onChangePhoto = useCallback(
    (image: File) => {
      const imageUrl = URL.createObjectURL(image)

      dispatch(setImage(imageUrl))
      dispatch(setImagesAvatar(imageUrl))
    },
    [dispatch]
  )

  const { t } = useTranslation()

  return (
    <div className={cls.SelectPhoto}>
      <header className={cls.header}>
        <Text tag={'h2'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
          {t.create.createNewPost}
        </Text>
      </header>
      <div className={cls.selectContainer}>
        <div className={cls.description}>
          <Image />
          <Text tag={'p'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
            {t.create.selectAPhotoInYourComputer}
          </Text>
        </div>

        <InputTypeFile setSelectedImage={onChangePhoto} label={t.common.selectFromComputer} />
      </div>
    </div>
  )
}
