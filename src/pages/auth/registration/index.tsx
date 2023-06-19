import { useState } from 'react'

import { EmailSentModal } from 'features/auth/registration/ui/EmailSentModal/EmailSentModal'
import { RegistrationForm } from 'features/auth/registration/ui/RegistrationForm/RegistrationForm'
import cls from 'pages/auth/registration/RegistrationPage.module.scss'
import { getLayout } from 'widgets/Layout/Layout'

const RegistrationPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div className={cls.registration_container}>
      {!isModalOpen && <RegistrationForm setIsModalOpen={setIsModalOpen} />}
      <EmailSentModal isOpen={isModalOpen} setOn={setIsModalOpen} title={'Email sent'} />
    </div>
  )
}

RegistrationPage.getLayout = getLayout
export default RegistrationPage
