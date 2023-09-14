import React from 'react'

import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import Github from '../../../../../public/icon/github-svgrepo-com.svg'
import Google from '../../../../../public/icon/google-svgrepo-com.svg'

import { LoginForm } from 'features/auth/login/ui/LoginForm'
import cls from 'features/auth/login/ui/LoginForm.module.scss'
import formCls from 'features/auth/logOut/ui/LogOutComponent.module.scss'
import { PATH } from 'shared/const/path'
import { useLoginForm } from 'shared/hooks/useLoginForm'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ControlledInput } from 'shared/ui/ControlledInput/ControlledInput'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

// @ts-ignore
const meta = {
  title: 'Auth/LoginForm',
  component: LoginForm,
  // decorators: [
  //   story => (
  //     <Provider store={store}>
  //       <GoogleOAuthProvider clientId="617342613759-f3kbvgm8l310fn40vh6qna2pv8u2uccr.apps.googleusercontent.com">
  //         <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
  //       </GoogleOAuthProvider>
  //     </Provider>
  //   ),
  // ],
  render: args => {
    const { t } = useTranslation()
    const { control, handleSubmit } = useLoginForm()
    const onSubmit = handleSubmit(data => {
      console.log(data)
    })

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
          <Button className={formCls.transform} theme={ButtonTheme.Clear} onClick={action('red')}>
            <Google width={36} height={36} />
          </Button>
          <Button className={formCls.transform} theme={ButtonTheme.Clear}>
            <Github width={36} height={36} />
          </Button>
        </div>

        <ControlledInput
          control={control}
          name={'email'}
          type={'email'}
          placeholder={'user@mailto.plus'}
          title={t.login.email}
        />
        <div className={cls.mb24}></div>
        <ControlledInput
          control={control}
          name={'password'}
          type={'password'}
          placeholder={'12345678'}
          title={t.login.password}
        />
        <div className={cls.mb60}></div>
        <NavLink
          className={cls.alignSelfEnd}
          href={PATH.PASSWORD_RECOVERY}
          color={NavLinkColor.GREY}
        >
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
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=303-3570&mode=design&t=YfNBlyurujtK4coF-0',
    },
  },
}
// export const Light: Story = {
//   args: {
//     children: 'Light Button',
//     disabled: false,
//     size: ButtonSize.XXl,
//     theme: ButtonTheme.LIGHT,
//     // fullWidth: true,
//   },
// }
//
// export const Secondary: Story = {
//   args: {
//     variant: 'secondary',
//     children: 'Secondary Button',
//     disabled: false,
//   },
// }
// export const Tertiary: Story = {
//   args: {
//     variant: 'tertiary',
//     children: 'Tertiary Button',
//     disabled: false,
//   },
// }
// export const Link: Story = {
//   args: {
//     variant: 'link',
//     children: 'Tertiary Button',
//     disabled: false,
//   },
// }
//
// export const FullWidth: Story = {
//   args: {
//     variant: 'primary',
//     children: 'Full Width Button',
//     disabled: false,
//     fullWidth: true,
//   },
// }
