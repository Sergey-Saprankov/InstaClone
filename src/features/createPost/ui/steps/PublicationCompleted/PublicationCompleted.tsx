import SuccessIcon from '../../../../../../public/icon/success.svg'

import cls from './PublicationCompleted.module.scss'

import { useTranslation } from 'shared/hooks/useTranslation'
import { Text } from 'shared/ui/Text/Text'

export const PublicationCompleted = () => {
  const { t } = useTranslation()

  return (
    <div className={cls.PhotoEditing}>
      <div className={cls.wrapper}>
        <SuccessIcon className={cls.icon} />
        <Text tag={'p'} className={cls.text}>
          {t.create.yourPostHasBeenShared}
        </Text>
      </div>
    </div>
  )
}
