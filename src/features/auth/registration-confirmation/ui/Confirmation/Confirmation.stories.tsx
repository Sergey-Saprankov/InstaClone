import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { Confirmation } from 'features/auth/registration-confirmation/ui/Confirmation/Confirmation'
import { store } from 'store/store'

const meta = {
  title: 'Auth/Confirmation',
  component: Confirmation,
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
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=301-5874&mode=design&t=6uYwrdp5m2F8ORTm-4',
    },
  },
} satisfies Meta<typeof Confirmation>

export default meta
type Story = StoryObj<typeof Confirmation>

export const ConfirmationStory: Story = {
  render: args => {
    return <Confirmation />
  },
}
