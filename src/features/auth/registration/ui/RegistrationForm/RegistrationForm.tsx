import Github from '../../../../../../public/icon/github-svgrepo-com.svg'
import Google from '../../../../../../public/icon/google-svgrepo-com.svg'
import { useTranslation } from '../../../../../shared/hooks/useTranslation'
import { ControlledCheckbox } from '../../../../../shared/ui/ControlledCheckbox/ControlledCheckbox'
import formCls from '../../../logOut/ui/LogOutComponent.module.scss'

import { setEmail } from 'features/auth/registration/model/slice/registrationSlice'
import { useRegisterMutation } from 'features/auth/registration/service/registration'
import cls from 'features/auth/registration/ui/RegistrationForm/RegistrationForm.module.scss'
import { PATH } from 'shared/const/path'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useRegisterForm } from 'shared/hooks/useRegisterForm'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ControlledInput } from 'shared/ui/ControlledInput/ControlledInput'
import { Loader } from 'shared/ui/Loader/Loader'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

type RegistrationFormType = {
  setIsModalOpen: (value: boolean) => void
}

export const RegistrationForm = ({ setIsModalOpen }: RegistrationFormType) => {
  const [registration, { isLoading, isSuccess }] = useRegisterMutation()
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useRegisterForm()

  const dispatch = useAppDispatch()

  const { t } = useTranslation()

  const onSubmit = handleSubmit(data => {
    console.log(data)
    const payload = {
      userName: data.userName,
      email: data.email,
      password: data.password,
      agree: data.agree,
    }

    dispatch(setEmail({ email: data.email }))
    registration(payload)
  })

  if (isLoading) return <Loader />
  if (isSuccess) setIsModalOpen(true)

  return (
    <form className={cls.form} onSubmit={onSubmit}>
      <Text
        tag={'h2'}
        className={formCls.alignSelfCenter}
        font={TextFontTheme.INTER_BOLD_XL}
        color={TextColorTheme.LIGHT}
      >
        {t.register.signUp}
      </Text>

      <div className={formCls.iconContainer}>
        <Button className={formCls.transform} theme={ButtonTheme.Clear}>
          <Google width={36} height={36} />
        </Button>
        <Button className={formCls.transform} theme={ButtonTheme.Clear}>
          <Github width={36} height={36} />
        </Button>
      </div>

      <ControlledInput
        control={control}
        name={'userName'}
        placeholder={'User name'}
        title={t.register.userName}
      />

      <div className={cls.mb36}></div>

      <ControlledInput
        control={control}
        name={'email'}
        placeholder={'EpamEpam@epam.com'}
        title={t.register.email}
      />

      <div className={cls.mb36}></div>

      <ControlledInput
        control={control}
        name={'password'}
        type={'password'}
        placeholder={'******************'}
        title={t.register.password}
      />

      <div className={cls.mb36}></div>

      <ControlledInput
        control={control}
        type={'password'}
        name={'confirmPassword'}
        placeholder={'******************'}
        title={t.register.passwordConfirm}
      />

      <div className={cls.mb18}></div>

      <div className={cls.policy}>
        <ControlledCheckbox control={control} name={'agree'} title={''} />
        <Text
          className={cls.text}
          tag={'span'}
          font={TextFontTheme.INTER_REGULAR_M}
          color={TextColorTheme.LIGHT}
        >
          <span>{t.register.agree}</span>
          <NavLink className={cls.text_decoration} href={PATH.TERMS} color={NavLinkColor.SECONDARY}>
            {t.register.terms}
          </NavLink>
          {t.register.and}
          <NavLink
            className={cls.text_decoration}
            href={PATH.PRIVACY}
            color={NavLinkColor.SECONDARY}
          >
            {t.register.policy}
          </NavLink>
        </Text>
      </div>

      <div className={cls.mb18}></div>

      <Button
        className={formCls.alignSelfCenter}
        disabled={!isValid}
        type={'submit'}
        theme={ButtonTheme.PRIMARY}
        size={ButtonSize.XXl}
      >
        <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
          {t.register.signUp}
        </Text>
      </Button>

      <div className={cls.mb18}></div>

      <Text
        className={formCls.alignSelfCenter}
        tag={'p'}
        color={TextColorTheme.LIGHT}
        font={TextFontTheme.INTER_REGULAR_XL}
      >
        {t.register.hasAccount}
      </Text>

      <div className={cls.mb12}></div>

      <NavLink className={cls.alignSelfCenterPure} href={PATH.LOGIN} color={NavLinkColor.SECONDARY}>
        {t.register.signIn}
      </NavLink>
    </form>
  )
}
