import React, { useState } from 'react'

import ReCAPTCHA from 'react-google-recaptcha'

import { useTranslation } from '../../../../shared/hooks/useTranslation'

import { usePasswordRecoveryMutation } from 'features/auth/passwordRecovery/service/passwordRecoveryApi'
import s from 'features/auth/passwordRecovery/ui/PasswordRecovery.module.scss'
import { setEmail } from 'features/auth/registration/model/slice/registrationSlice'
import { PATH } from 'shared/const/path'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useForgotForm } from 'shared/hooks/useForgotPassword'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ControlledInput } from 'shared/ui/ControlledInput/ControlledInput'
import { Loader } from 'shared/ui/Loader/Loader'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

type RegistrationFormType = {
  setIsModalOpen: (value: boolean) => void
}

export const PasswordRecovery = ({ setIsModalOpen }: RegistrationFormType) => {
  const [passwordRecovery, { isLoading, isSuccess }] = usePasswordRecoveryMutation()
  const { control, handleSubmit } = useForgotForm()
  const [token, setToken] = useState<string | null>(null)
  const dispatch = useAppDispatch()

  const { t } = useTranslation()

  const onSubmit = handleSubmit(data => {
    if (!token) {
      return
    }

    const payload = {
      email: data.email,
      recaptcha: token,
    }

    dispatch(setEmail({ email: data.email }))
    passwordRecovery(payload)
  })

  const onChange = (value: string | null) => {
    setToken(value)
  }

  if (isLoading) return <Loader />
  if (isSuccess) setIsModalOpen(true)

  return (
    <form className={s.PasswordRecoveryForm} onSubmit={onSubmit}>
      <Text
        className={s.alignSelfCenter}
        tag={'h2'}
        font={TextFontTheme.INTER_BOLD_XL}
        color={TextColorTheme.LIGHT}
      >
        {t.passwordRecovery.forgotPassword}
      </Text>

      <ControlledInput
        control={control}
        name={'email'}
        type={'email'}
        placeholder={'Epam@epam.com'}
        title={t.passwordRecovery.email}
      />

      <div className={s.mb15}></div>

      <div className={s.mb29}></div>

      <Button
        className={s.alignSelfCenter}
        type={'submit'}
        theme={ButtonTheme.PRIMARY}
        size={ButtonSize.XXl}
      >
        <Text
          className={s.alignSelfCenter}
          tag={'span'}
          font={TextFontTheme.INTER_SEMI_BOLD_L}
          color={TextColorTheme.LIGHT}
        >
          {t.passwordRecovery.sendLink}
        </Text>
      </Button>

      <div className={s.mb29}></div>

      <NavLink className={s.alignSelfCenter} href={PATH.LOGIN} color={NavLinkColor.SECONDARY}>
        {t.passwordRecovery.backSignIn}
      </NavLink>

      <div className={s.mb29}></div>

      <div className={s.recaptcha}>
        <ReCAPTCHA
          onChange={onChange}
          sitekey={'6LeY2y0mAAAAANwI_paCWfoksCgBm1n2z9J0nwNQ'} //process.env.NEXT_PUBLIC_SITE_KEY as string
          theme={'dark'}
        />
      </div>
    </form>
  )
}
