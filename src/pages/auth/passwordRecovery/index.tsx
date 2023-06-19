import { useState } from 'react'

import { PasswordRecovery } from 'features/auth/passwordRecovery/ui/PasswordRecovery'
import { EmailSentModal } from 'features/auth/registration/ui/EmailSentModal/EmailSentModal'
import s from 'pages/auth/passwordRecovery/PasswordRecovery.module.scss'
import { getLayout } from 'widgets/Layout/Layout'

const PassWordRecoveryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div className={s.PassWordRecovery}>
      {!isModalOpen && <PasswordRecovery setIsModalOpen={setIsModalOpen} />}
      <EmailSentModal isOpen={isModalOpen} setOn={setIsModalOpen} title={'Email sent'} />
    </div>
  )
}

PassWordRecoveryPage.getLayout = getLayout
export default PassWordRecoveryPage
