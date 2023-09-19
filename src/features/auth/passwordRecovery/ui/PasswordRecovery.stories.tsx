import React from 'react'

import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { PasswordRecovery } from 'features/auth/passwordRecovery/ui/PasswordRecovery'
import { store } from 'store/store'

const meta = {
  title: 'Auth/PasswordRecovery',
  component: PasswordRecovery,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=1787-11117&mode=design&t=6uYwrdp5m2F8ORTm-4',
    },
  },
} satisfies Meta<typeof PasswordRecovery>

export default meta
type Story = StoryObj<typeof PasswordRecovery>

export const PasswordRecoveryStory: Story = {
  render: args => {
    const actionString = 'action'

    return (
      <PasswordRecovery
        setIsModalOpen={() => {
          action(actionString)
        }}
      />
    )
  },
}
