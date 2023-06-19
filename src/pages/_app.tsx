import 'styles/globals.scss'
import { ReactElement, ReactNode } from 'react'

import 'styles/nprogress.scss'
import 'styles/dataPickerGlobal.scss'
import { NextPage } from 'next'
import { AppProps } from 'next/app'

import { useLoader } from 'shared/hooks/useLoader'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useLoader()
  const getLayout = Component.getLayout ?? (page => page)

  // @ts-ignore
  return getLayout(<Component {...pageProps} />)
}
