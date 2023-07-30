import { FC, memo, useState } from 'react'

import { useRouter } from 'next/router'

import Logout from '../../../../../public/icon/log-out.svg'
import { useTranslation } from '../../../../shared/hooks/useTranslation'

import cls from './LogOutComponent.module.scss'

import { Modal } from 'features/auth/logOut/modal/modal'
import { useLogOutMutation } from 'features/auth/logOut/service/logOut'
import { PATH } from 'shared/const/path'
import { getAuthMeData } from 'shared/hoc/model/selectors/getAuthMeData/getAuthMeData'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

interface LogOutComponentProps {
  className?: string
}

export const LogOutComponent: FC<LogOutComponentProps> = memo(({ className = '' }) => {
  const router = useRouter()
  const logOutHandler = () => {
    setShowModal(true)
  }
  const [logOut, { isLoading, isSuccess }] = useLogOutMutation()
  const authMeData = useAppSelector(getAuthMeData)
  const email = authMeData?.email
  const [showModal, setShowModal] = useState<boolean>(false) //modal

  const { t } = useTranslation()
  const closeModal = () => {
    setShowModal(false)
  }
  const onSubmit = () => {
    logOut()
    setShowModal(false)
  }

  if (isLoading) return <Loader />

  if (isSuccess) {
    router.push(PATH.LOGIN)

    return <></>
  }

  return (
    <div className={classNames(cls.LogOut, {}, [])}>
      <Button className={cls.btn} theme={ButtonTheme.Clear} onClick={logOutHandler}>
        <Logout />
        <Text
          tag={'span'}
          className={className}
          font={TextFontTheme.INTER_MEDIUM_L}
          color={TextColorTheme.LIGHT}
        >
          {t.sidebar.logOut}
        </Text>
      </Button>
      <Modal
        title={t.logOutModal.logOut}
        active={showModal}
        onClose={closeModal}
        onSubmit={onSubmit}
      >
        <Text tag={'p'} font={TextFontTheme.INTER_REGULAR_L}>
          {t.logOutModal.confirmation}
        </Text>
        <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L}>{`"${email}" ?`}</Text>
      </Modal>
    </div>
  )
})
