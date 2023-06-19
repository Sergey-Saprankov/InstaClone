import 'styles/globals.scss'
import React, { ReactElement, ReactNode } from 'react'

import 'styles/nprogress.scss'
import 'styles/dataPickerGlobal.scss'
import { NextPage } from 'next'
import { AppProps } from 'next/app'

import { useLoader } from 'shared/hooks/useLoader'
import { wrapper } from 'store/store'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  useLoader()
  const getLayout = Component.getLayout ?? (page => page)

  // @ts-ignore
  return getLayout(<Component {...pageProps} />)
}

export default wrapper.withRedux(App)
