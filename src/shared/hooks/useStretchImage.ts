import { RefObject, useEffect } from 'react'

import { useAppDispatch } from './useAppDispatch'

import {
  setWidth,
  setHeight,
  setClearImagesAvatar,
} from 'features/createPost/model/slice/uploadPhotoSlice'

export const useStretchImage = (parentRef: RefObject<HTMLDivElement>) => {
  const dispatch = useAppDispatch()

  const stretchAvatar = () => {
    const parentElement = parentRef.current

    if (parentElement) {
      const parentWidth = parentElement.offsetWidth
      const parentHeight = parentElement.offsetHeight

      // Задаем новые размеры для аватарки
      // Можно использовать useState для установки размеров
      const newWidth = parentWidth
      const newHeight = parentHeight

      dispatch(setWidth(newWidth))
      dispatch(setHeight(newHeight))
      // Обновляем размеры аватарки
      // Можно использовать useState и передать новые размеры в свойства width и height компонента AvatarEditor
    }
  }

  useEffect(() => {
    stretchAvatar()
    window.addEventListener('resize', stretchAvatar)

    return () => {
      window.removeEventListener('resize', stretchAvatar)
      dispatch(setClearImagesAvatar())
    }
  }, [])
}
