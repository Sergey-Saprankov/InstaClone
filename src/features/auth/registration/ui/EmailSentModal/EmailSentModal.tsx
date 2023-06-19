import { useRouter } from 'next/router'

import CloseIcon from '../../../../../../public/icon/close.svg'
import { PATH } from '../../../../../shared/const/path'

import cls from './EmailSentModal.module.scss'

import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ModalHeader } from 'shared/ui/ModalHeader/ModalHeader'
import { Portal } from 'shared/ui/Portal/Portal'

type EmailSentModalType = {
  isOpen: boolean
  setOn: (value: boolean) => void
  title: string
}

export const EmailSentModal = ({ isOpen, title, setOn }: EmailSentModalType) => {
  const email = useAppSelector(state => state.registration.email)
  const router = useRouter()

  if (!isOpen) return null

  const handleButtonClick = () => {
    setOn(false)
    router.push(PATH.LOGIN)
  }

  return (
    <Portal>
      <div className={cls.container}>
        <ModalHeader title={title} handleButtonClick={handleButtonClick} />
        <div className={cls.main}>
          <div className={cls.description}>
            We have sent a link to confirm your email to {email ?? 'your email'}
          </div>
          <div className={cls.btnContainer}>
            <Button theme={ButtonTheme.PRIMARY} onClick={handleButtonClick} className={cls.okBtn}>
              OK
            </Button>
          </div>
        </div>
      </div>
    </Portal>
  )
}
