import React from 'react'

import { GoogleOAuthProvider } from '@react-oauth/google'
import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import RegistrationConfirmation from 'pages/auth/registration-confirmation/index'
import { store } from 'store/store'

const meta = {
  title: 'Pages/Auth/Registration Confirmation',
  component: RegistrationConfirmation,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=301-5874&mode=design&t=6uYwrdp5m2F8ORTm-4',
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
} satisfies Meta<typeof RegistrationConfirmation>

export default meta
type Story = StoryObj<typeof RegistrationConfirmation>

export const RegistrationConfirmationStory: Story = {
  render: () => {
    return <RegistrationConfirmation />
  },
}
