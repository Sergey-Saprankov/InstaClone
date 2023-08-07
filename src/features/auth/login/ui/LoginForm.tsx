import React from 'react'

import { useRouter } from 'next/router'

import Github from '../../../../../public/icon/github-svgrepo-com.svg'
import Google from '../../../../../public/icon/google-svgrepo-com.svg'
import formCls from '../../logOut/ui/LogOutComponent.module.scss'

import cls from './LoginForm.module.scss'

import { useLoginMutation } from 'features/auth/login/authByEmail/service/authByEmail'
import { PATH } from 'shared/const/path'
import { useLoginForm } from 'shared/hooks/useLoginForm'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ControlledInputNew } from 'shared/ui/ControlledInput/ControlledInput'
import { Loader } from 'shared/ui/Loader/Loader'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const LoginForm = () => {
  const router = useRouter()
  const [login, { isLoading, isSuccess }] = useLoginMutation()
  const { control, handleSubmit } = useLoginForm()

  const { t } = useTranslation()

  const onSubmit = handleSubmit(data => {
    login(data)
  })

  if (isLoading) return <Loader />

  if (isSuccess) {
    router.push(PATH.HOME)

    return <></>
  }

  return (
    <form className={cls.form} onSubmit={onSubmit}>
      <Text
        className={formCls.alignSelfCenter}
        tag={'h2'}
        font={TextFontTheme.INTER_BOLD_XL}
        color={TextColorTheme.LIGHT}
      >
        {t.login.signIn}
      </Text>

      <div className={formCls.iconContainer}>
        <Button className={formCls.transform} theme={ButtonTheme.Clear}>
          <Google width={36} height={36} />
        </Button>
        <Button className={formCls.transform} theme={ButtonTheme.Clear}>
          <Github width={36} height={36} />
        </Button>
      </div>

      <ControlledInputNew
        control={control}
        name={'email'}
        type={'email'}
        placeholder={'user@mailto.plus'}
        title={t.login.email}
      />
      <div className={cls.mb24}></div>
      <ControlledInputNew
        control={control}
        name={'password'}
        type={'password'}
        placeholder={'12345678'}
        title={t.login.password}
      />
      <div className={cls.mb60}></div>
      <NavLink className={cls.alignSelfEnd} href={PATH.PASSWORD_RECOVERY} color={NavLinkColor.GREY}>
        <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L}>
          {t.login.forgotPassword}
        </Text>
      </NavLink>
      <div className={cls.mb24}></div>
      <Button
        className={cls.alignSelfCenter}
        type={'submit'}
        theme={ButtonTheme.PRIMARY}
        size={ButtonSize.XXl}
      >
        <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
          {t.login.signIn}
        </Text>
      </Button>
      <div className={cls.mb18}></div>
      <Text
        className={formCls.alignSelfCenter}
        tag={'p'}
        color={TextColorTheme.LIGHT}
        font={TextFontTheme.INTER_REGULAR_XL}
      >
        {t.login.hasAccount}
      </Text>
      <div className={cls.mb12}></div>
      <NavLink
        className={formCls.alignSelfCenter}
        href={PATH.REGISTRATION}
        color={NavLinkColor.SECONDARY}
      >
        {t.login.signUp}
      </NavLink>
    </form>
  )
}
