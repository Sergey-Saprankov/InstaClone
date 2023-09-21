import React from 'react'

import { GoogleOAuthProvider } from '@react-oauth/google'
import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import UserProfileSetting from 'pages/profile-setting/index'
import { store } from 'store/store'

const meta = {
  title: 'Pages/Profile Setting',
  component: UserProfileSetting,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=306-5067&mode=design&t=tETCZWr8PNXPQquC-4',
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
} satisfies Meta<typeof UserProfileSetting>

export default meta
type Story = StoryObj<typeof UserProfileSetting>

export const UserProfileSettingStory: Story = {
  render: () => {
    return <UserProfileSetting />
  },
}
