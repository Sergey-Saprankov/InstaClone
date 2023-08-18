import { useCallback, useState } from 'react'

import { useSelector } from 'react-redux'

import SuccessIcon from '../../../../../../public/icon/success.svg'

import cls from './PublicationCompleted.module.scss'

import { getIsOpenModal } from 'features/createPost/model/selectors/getIsOpenModal/getIsOpenModal'
import { setCloseModal } from 'features/createPost/model/slice/uploadPhotoSlice'
import { CloseModal } from 'features/createPost/ui/CloseModal/CloseModal'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useTranslation } from 'shared/hooks/useTranslation'
import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'
import { Text } from 'shared/ui/Text/Text'

export const PublicationCompleted = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()
  const isOpen = useSelector(getIsOpenModal)
  const { t } = useTranslation()

  const onOpenedCloseModal = useCallback(() => {
    dispatch(setCloseModal(false))
  }, [])

  return (
    <div className={cls.PhotoEditing}>
      {isLoading && <LoaderContent isText={true} className={cls.loaderContent} />}
      <CloseModal isOpen={isOpen} callBack={onOpenedCloseModal} />

      <div className={cls.wrapper}>
        <SuccessIcon className={cls.icon} />
        <Text tag={'p'} className={cls.text}>
          {t.create.yourPostHasBeenShared}
        </Text>
      </div>
    </div>
  )
}
