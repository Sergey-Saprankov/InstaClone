import 'styles/globals.scss'
import React, { ReactElement, ReactNode } from 'react'

import 'styles/nprogress.scss'
import 'styles/dataPickerGlobal.scss'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { useLoader } from 'shared/hooks/useLoader'
import { wrapper } from 'store/store'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps, ...rest }: AppPropsWithLayout) {
  const { store } = wrapper.useWrappedStore(rest)

  useLoader()
  const getLayout = Component.getLayout ?? (page => page)

  return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
}
