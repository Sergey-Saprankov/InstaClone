import React, { FC, memo, ReactNode } from 'react'

import { useRouter } from 'next/router'

import { LoaderLogo } from '../../ui/LoaderLogo/LoaderLogo'

import { PATH } from 'shared/const/path'
import { getAuthMeData } from 'shared/hoc/model/selectors/getAuthMeData/getAuthMeData'
import { useAuthQuery } from 'shared/hoc/service/authProvider'
import { useAppSelector } from 'shared/hooks/useAppSelector'

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = memo(({ children }) => {
  const { push, asPath } = useRouter()
  const authMeData = useAppSelector(getAuthMeData)?.email

  const skipAuthMe =
    Boolean(authMeData) || asPath.startsWith(PATH.AUTH) || asPath === PATH.ERROR_PAGE
  const { isLoading, error } = useAuthQuery(undefined, {
    skip: skipAuthMe,
  })

  const isAuthPage = authMeData || asPath.startsWith(PATH.AUTH)

  if (error && !isAuthPage) {
    push(PATH.LOGIN)

    return <></>
  }

  return (
    <>
      {isLoading && <LoaderLogo />}
      {children}
    </>
  )
})
