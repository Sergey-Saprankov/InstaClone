import React from 'react'

import { GoogleOAuthProvider } from '@react-oauth/google'
import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import Profile from 'pages/profile/index'
import { store } from 'store/store'

const meta = {
  title: 'Pages/Profile',
  component: Profile,
  tags: ['autodocs'],
  // parameters: {
  //   design: {
  //     type: 'figma',
  //     url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=301-5874&mode=design&t=6uYwrdp5m2F8ORTm-4',
  //   },
  // },
  decorators: [
    Story => (
      <Provider store={store}>
        <GoogleOAuthProvider clientId="617342613759-f3kbvgm8l310fn40vh6qna2pv8u2uccr.apps.googleusercontent.com">
          <Story />
        </GoogleOAuthProvider>
      </Provider>
    ),
  ],
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof Profile>

export const ProfileStory: Story = {
  render: () => {
    return <Profile />
  },
}
