import { SelectPhoto } from './SelectPhoto/SelectPhoto'
import cls from './UploadPhotoModal.module.scss'

import { getImage } from 'features/profile/uploadPhoto/model/selectors/getImage/getImage'
import { getStep } from 'features/profile/uploadPhoto/model/selectors/getStep/getStep'
import { PhotoEditing } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/PhotoEditing'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { classNames } from 'shared/lib/classNames/classNames'

export const UploadPhotoModal = () => {
  const step = useAppSelector(getStep)
  const image = useAppSelector(getImage)

  return (
    <div className={classNames(cls.content, { [cls.open]: step === 1 || step === 2 }, [])}>
      {image ? <PhotoEditing image={image} /> : <SelectPhoto />}
    </div>
  )
}
