import React from 'react'

import { GoogleOAuthProvider } from '@react-oauth/google'
import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { LoginForm } from 'features/auth/login/ui/LoginForm'
import { store } from 'store/store'

const meta = {
  title: 'Pages/Auth/Login Form',
  component: LoginForm,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=303-3695&mode=design&t=tETCZWr8PNXPQquC-4',
    },
  },
  decorators: [
    Story => (
      <Provider store={store}>
        <GoogleOAuthProvider clientId="617342613759-f3kbvgm8l310fn40vh6qna2pv8u2uccr.apps.googleusercontent.com">
          <Story />
        </GoogleOAuthProvider>
      </Provider>
    ),
  ],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof LoginForm>

export const LoginFormStory: Story = {
  render: () => {
    return <LoginForm />
  },
}
