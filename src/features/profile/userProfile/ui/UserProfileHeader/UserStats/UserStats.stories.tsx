import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { UserStats } from 'features/profile/userProfile/ui/UserProfileHeader/UserStats/UserStats'
import { store } from 'store/store'

const meta = {
  title: 'Profile/User Profile/User Stats',
  component: UserStats,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof UserStats>

export default meta
type Story = StoryObj<typeof UserStats>

export const UserStatsStory: Story = {
  render: () => {
    return <UserStats />
  },
}
