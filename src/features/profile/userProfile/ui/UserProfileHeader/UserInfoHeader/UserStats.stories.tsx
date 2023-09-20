import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { UserInfoHeader } from 'features/profile/userProfile/ui/UserProfileHeader/UserInfoHeader/UserInfoHeader'
import { store } from 'store/store'

const meta = {
  title: 'Profile/User Profile/User Info Header',
  component: UserInfoHeader,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof UserInfoHeader>

export default meta
type Story = StoryObj<typeof UserInfoHeader>

export const UserInfoHeaderStory: Story = {
  render: () => {
    return <UserInfoHeader />
  },
}
