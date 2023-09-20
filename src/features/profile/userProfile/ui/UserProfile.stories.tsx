import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { UserProfile } from 'features/profile/userProfile/ui/UserProfile'
import { store } from 'store/store'

const meta = {
  title: 'Profile/User Profile',
  component: UserProfile,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof UserProfile>

export default meta
type Story = StoryObj<typeof UserProfile>

export const UserProfileStory: Story = {
  render: () => {
    return <UserProfile />
  },
}
