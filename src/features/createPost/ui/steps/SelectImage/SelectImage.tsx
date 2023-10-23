import React, { useCallback } from 'react'

import ImageMedia from '../../../../../../public/icon/media.svg'

import cls from './SelectImage.module.scss'

import { setImages, setStep } from 'features/createPost/model/slice/uploadPhotoSlice'
import { STEP } from 'features/createPost/model/types/const'
import { Image } from 'features/createPost/model/types/uploadPhotoSchema'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useTranslation } from 'shared/hooks/useTranslation'
import { InputTypeFile } from 'shared/ui/InputTypeFile/InputTypeFile'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const SelectImage = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const onChangePhoto = useCallback(
    (image: File) => {
      const imageUrl = URL.createObjectURL(image)
      const payload: Image = {
        imageUrlOrigin: imageUrl,
        imageUrlUpdate: imageUrl,
        filter: 'none',
        scale: 1,
        position: { x: 0, y: 0 },
      }

      dispatch(setImages(payload))
      dispatch(setStep(STEP.CROP))
    },
    [dispatch]
  )

  return (
    <div className={cls.SelectPhoto}>
      <header className={cls.header}>
        <Text tag={'h2'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
          {t.create.createNewPost}
        </Text>
      </header>
      <div className={cls.selectContainer}>
        <div className={cls.description}>
          <ImageMedia />
          <Text tag={'p'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
            {t.create.selectAPhotoInYourComputer}
          </Text>
          <Text
            className={cls.mt10}
            tag={'p'}
            color={TextColorTheme.LIGHT}
            font={TextFontTheme.INTER_REGULAR_M}
          >
            {t.create.file}
          </Text>
        </div>

        <InputTypeFile setSelectedImage={onChangePhoto} label={t.common.selectFromComputer} />
      </div>
    </div>
  )
}
