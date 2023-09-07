import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import Github from '../../../../../../public/icon/github-svgrepo-com.svg'
import Google from '../../../../../../public/icon/google-svgrepo-com.svg'

import formCls from 'features/auth/logOut/ui/LogOutComponent.module.scss'
import { RegistrationForm } from 'features/auth/registration/ui/RegistrationForm/RegistrationForm'
import cls from 'features/auth/registration/ui/RegistrationForm/RegistrationForm.module.scss'
import { PATH } from 'shared/const/path'
import { useRegisterForm } from 'shared/hooks/useRegisterForm'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ControlledCheckbox } from 'shared/ui/ControlledCheckbox/ControlledCheckbox'
import { ControlledInput } from 'shared/ui/ControlledInput/ControlledInput'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import { store } from 'store/store'

const meta = {
  title: 'Auth/RegistrationForm',
  component: RegistrationForm,
  argTypes: {
    setIsModalOpen: { action: true },
  },
  decorators: [
    Story => (
      <Provider store={store}>
        {/*<GoogleOAuthProvider clientId="617342613759-f3kbvgm8l310fn40vh6qna2pv8u2uccr.apps.googleusercontent.com">*/}
        {/*<AuthProvider>*/}
        <Story />
        {/*</AuthProvider>*/}
        {/*</GoogleOAuthProvider>*/}
      </Provider>
    ),
  ],
  // decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
} satisfies Meta<typeof RegistrationForm>

export default meta
type Story = StoryObj<typeof RegistrationForm>

export const Primary: Story = {
  render: (args, context) => {
    const {
      control,
      handleSubmit,
      formState: { isValid },
    } = useRegisterForm()
    const onSubmit = handleSubmit(data => {
      console.log(data)
    })
    const { t } = useTranslation()

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
          <Button
            className={formCls.transform}
            theme={ButtonTheme.Clear}
            onClick={() => console.log()}
          >
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
            <NavLink
              className={cls.text_decoration}
              href={PATH.TERMS}
              color={NavLinkColor.SECONDARY}
            >
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

        <NavLink
          className={cls.alignSelfCenterPure}
          href={PATH.LOGIN}
          color={NavLinkColor.SECONDARY}
        >
          {t.register.signIn}
        </NavLink>
      </form>
    )
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=303-3570&mode=design&t=YfNBlyurujtK4coF-0',
    },
  },
}
// export const Submitted: Story = {
//   play: async ({ args, canvasElement, step }) => {
//     const canvas = within(canvasElement)
//
//     await step('Enter email and password', async () => {
//       await userEvent.type(canvas.getByTestId('email'), 'hi@example.com')
//       await userEvent.type(canvas.getByTestId('password'), 'supersecret')
//     })
//
//     await step('Submit form', async () => {
//       await userEvent.click(canvas.getByRole('button'))
//     })
//   },
// }
