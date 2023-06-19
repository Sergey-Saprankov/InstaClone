import Github from '../../../../../../public/icon/github-svgrepo-com.svg'
import Google from '../../../../../../public/icon/google-svgrepo-com.svg'
import formCls from '../../../logOut/ui/LogOutComponent.module.scss'

import { setEmail } from 'features/auth/registration/model/slice/registrationSlice'
import { useRegisterMutation } from 'features/auth/registration/service/registration'
import cls from 'features/auth/registration/ui/RegistrationForm/RegistrationForm.module.scss'
import { PATH } from 'shared/const/path'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useRegisterForm } from 'shared/hooks/useRegisterForm'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ControlledInputNew } from 'shared/ui/ControlledInput/ControlledInput'
import { Loader } from 'shared/ui/Loader/Loader'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

type RegistrationFormType = {
  setIsModalOpen: (value: boolean) => void
}

export const RegistrationForm = ({ setIsModalOpen }: RegistrationFormType) => {
  const [registration, { isLoading, isSuccess }] = useRegisterMutation()
  const { control, handleSubmit } = useRegisterForm()

  const dispatch = useAppDispatch()
  const onSubmit = handleSubmit(data => {
    const payload = {
      userName: data.userName,
      email: data.email,
      password: data.password,
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
        Sign Up
      </Text>

      <div className={formCls.iconContainer}>
        <Button className={formCls.transform} theme={ButtonTheme.Clear}>
          <Google width={36} height={36} />
        </Button>
        <Button className={formCls.transform} theme={ButtonTheme.Clear}>
          <Github width={36} height={36} />
        </Button>
      </div>

      <ControlledInputNew control={control} name={'userName'} placeholder={'Epam'} title={'Epam'} />
      <div className={cls.mb36}></div>

      <ControlledInputNew
        control={control}
        name={'email'}
        placeholder={'EpamEpam@epam.com'}
        title={'Email'}
      />
      <div className={cls.mb36}></div>
      <ControlledInputNew
        control={control}
        name={'password'}
        type={'password'}
        placeholder={'******************'}
        title={'Password'}
      />
      <div className={cls.mb36}></div>
      <ControlledInputNew
        control={control}
        type={'password'}
        name={'confirmPassword'}
        placeholder={'******************'}
        title={'Password confirmation'}
      />
      <div className={cls.mb36}></div>
      <Button type={'submit'} theme={ButtonTheme.PRIMARY} size={ButtonSize.XXl}>
        <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
          Sign Up
        </Text>
      </Button>
      <div className={cls.mb18}></div>
      <Text
        className={formCls.alignSelfCenter}
        tag={'p'}
        color={TextColorTheme.LIGHT}
        font={TextFontTheme.INTER_REGULAR_XL}
      >
        Do you have an account?
      </Text>
      <div className={cls.mb12}></div>

      <NavLink className={cls.alignSelfCenterPure} href={PATH.LOGIN} color={NavLinkColor.SECONDARY}>
        Sign In
      </NavLink>
    </form>
  )
}
