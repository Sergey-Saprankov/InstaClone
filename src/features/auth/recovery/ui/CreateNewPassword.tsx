import { memo } from 'react'

import { useRouter } from 'next/router'

import { useCreateNewPasswordMutation } from '../service/createNewPassword'

import s from './CreateNewPassword.module.scss'

import { PATH } from 'shared/const/path'
import { useRecoveryForm } from 'shared/hooks/useRecoveryForm'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ControlledInput } from 'shared/ui/ControlledInput/ControlledInput'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const CreateNewPasswordForm = memo(() => {
  const [createNewPassword, { isLoading, isSuccess }] = useCreateNewPasswordMutation()
  const router = useRouter()
  const { code } = router.query

  const { control, handleSubmit } = useRecoveryForm()

  const { t } = useTranslation()

  const onSubmit = handleSubmit(data => {
    const payload = {
      newPassword: data.password,
      recoveryCode: code as string,
    }

    createNewPassword(payload)
  })

  if (isLoading) return <Loader />
  if (isSuccess) {
    router.push(PATH.LOGIN)

    return <></>
  }

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <Text
        tag={'h2'}
        className={s.alignSelfCenter}
        font={TextFontTheme.INTER_BOLD_XL}
        color={TextColorTheme.LIGHT}
      >
        {t.passwordRecovery.createPassword}
      </Text>

      <ControlledInput
        control={control}
        name={'password'}
        type={'password'}
        placeholder={'******************'}
        title={t.passwordRecovery.newPassword}
      />

      <div className={s.mb22}></div>

      <ControlledInput
        control={control}
        type={'password'}
        name={'confirmPassword'}
        placeholder={'******************'}
        title={t.passwordRecovery.passwordConfirm}
      />
      <div className={s.mb18}></div>
      <Text
        className={`${s.mb12} ${s.alignSelfCenter}`}
        tag={'p'}
        color={TextColorTheme.LIGHT}
        font={TextFontTheme.INTER_REGULAR_XL}
      >
        {t.passwordRecovery.passwordLength}
      </Text>
      <div className={s.mb41}></div>
      <Button type={'submit'} className={s.mb18} theme={ButtonTheme.PRIMARY} size={ButtonSize.XXl}>
        <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
          {t.passwordRecovery.createPassword}
        </Text>
      </Button>
    </form>
  )
})
