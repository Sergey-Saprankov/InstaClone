import { LoginForm } from 'features/auth/login/ui/LoginForm'
import cls from 'pages/auth/login/LoginPage.module.scss'
import { getLayout } from 'widgets/Layout/Layout'

const LoginPage = () => {
  return (
    <div className={cls.Login}>
      <LoginForm />
    </div>
  )
}

LoginPage.getLayout = getLayout
export default LoginPage
