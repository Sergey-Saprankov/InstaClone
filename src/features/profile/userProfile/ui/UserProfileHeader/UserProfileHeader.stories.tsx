import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { UserProfileHeader } from 'features/profile/userProfile/ui/UserProfileHeader/UserProfileHeader'
import { store } from 'store/store'

const meta = {
  title: 'Profile/User Profile/User Profile Header',
  component: UserProfileHeader,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof UserProfileHeader>

export default meta
type Story = StoryObj<typeof UserProfileHeader>

export const UserProfileHeaderStory: Story = {
  render: () => {
    return <UserProfileHeader />
  },
}
