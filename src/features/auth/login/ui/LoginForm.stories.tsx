import React from 'react'

import { GoogleOAuthProvider } from '@react-oauth/google'
import { Component } from '@storybook/icons'
import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { LoginForm } from 'features/auth/login/ui/LoginForm'
import { AuthProvider } from 'shared/hoc'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { store } from 'store/store'
import { getLayout } from 'widgets/Layout/Layout'

const meta = {
  title: 'Auth/LoginForm',
  component: LoginForm,
  decorators: [
    story => (
      <Provider store={store}>
        <GoogleOAuthProvider clientId="617342613759-f3kbvgm8l310fn40vh6qna2pv8u2uccr.apps.googleusercontent.com">
          <AuthProvider>{getLayout(<Component {...story} />)}</AuthProvider>
        </GoogleOAuthProvider>
      </Provider>
    ),
  ],
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
export const Light: Story = {
  args: {
    children: 'Light Button',
    disabled: false,
    size: ButtonSize.XXl,
    theme: ButtonTheme.LIGHT,
    // fullWidth: true,
  },
}
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
