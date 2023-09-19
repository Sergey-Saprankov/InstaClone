import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { LogOutComponent } from 'features/auth/logOut/ui/LogOutComponent'
import { store } from 'store/store'

const meta = {
  title: 'Auth/LogOutComponent',
  component: LogOutComponent,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof LogOutComponent>

export default meta
type Story = StoryObj<typeof LogOutComponent>

export const LogOutComponentStory: Story = {
  render: args => {
    return <LogOutComponent />
  },
}
