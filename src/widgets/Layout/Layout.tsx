import { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar/ui/Sidebar'

import cls from './Layout.module.scss'

import { PATH } from 'shared/const/path'
import { AuthProvider } from 'shared/hoc'
import { store } from 'store/store'

export const Layout: NextPage<PropsWithChildren> = props => {
  const { asPath } = useRouter()
  const { children } = props
  const isLoggedInUser = asPath.startsWith(PATH.AUTH) || asPath === PATH.ERROR_PAGE

  return (
    <div className={cls.Layout}>
      <Header />
      <div className={!isLoggedInUser ? cls.contentContainer : ''}>
        {!isLoggedInUser && <Sidebar />}
        <div className={cls.contentWrapper}>{children}</div>
      </div>
    </div>
  )
}

export const getLayout = (page: ReactElement) => {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <Layout>{page}</Layout>
        </AuthProvider>
        <ToastContainer />
      </Provider>
    </>
  )
}
