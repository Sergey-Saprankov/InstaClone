import React from 'react'

import { GoogleOAuthProvider } from '@react-oauth/google'
import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import RegistrationPage from 'pages/auth/registration/index'
import { store } from 'store/store'

const meta = {
  title: 'Pages/Auth/Registration Page',
  component: RegistrationPage,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=1632-8891&mode=design&t=6uYwrdp5m2F8ORTm-4',
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
} satisfies Meta<typeof RegistrationPage>

export default meta
type Story = StoryObj<typeof RegistrationPage>

export const RegistrationPageStory: Story = {
  render: () => {
    return <RegistrationPage />
  },
}
