import 'styles/globals.scss'
import React, { ReactElement, ReactNode } from 'react'

import 'styles/nprogress.scss'
import 'styles/dataPickerGlobal.scss'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { AuthProvider } from 'shared/hoc'
import { useLoader } from 'shared/hooks/useLoader'
import { store } from 'store/store'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useLoader()
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="617342613759-f3kbvgm8l310fn40vh6qna2pv8u2uccr.apps.googleusercontent.com">
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
      </GoogleOAuthProvider>
    </Provider>
  )
}
