import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { UserAvatarSmall } from 'modules/user/ui/UserAvatarSmall/UserAvatarSmall'
import { store } from 'store/store'

const meta = {
  title: 'User/UI/UserAvatarSmall',
  component: UserAvatarSmall,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof UserAvatarSmall>

export default meta
type Story = StoryObj<typeof UserAvatarSmall>

export const UserAvatarSmallStory: Story = {
  render: args => {
    return <UserAvatarSmall description={'rr'} />
  },
}
