import SuccessIcon from '../../../../../../../../public/icon/success.svg'

import cls from './PublicationCompleted.module.scss'

import { Text } from 'shared/ui/Text/Text'

export const PublicationCompleted = () => {
  return (
    <div className={cls.wrapper}>
      <SuccessIcon className={cls.icon} />
      <Text tag={'p'} className={cls.text}>
        Your post has been shared.
      </Text>
    </div>
  )
}
