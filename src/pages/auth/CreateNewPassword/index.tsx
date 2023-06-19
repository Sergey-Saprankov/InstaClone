import s from './CreateNewPassword.module.scss'

import { CreateNewPasswordForm } from 'features/auth/recovery/ui/CreateNewPassword'
import { getLayout } from 'widgets/Layout/Layout'

const CreateNewPasswordPage = () => {
  return (
    <div className={s.PassWordRecovery}>
      <CreateNewPasswordForm />
    </div>
  )
}

CreateNewPasswordPage.getLayout = getLayout
export default CreateNewPasswordPage
