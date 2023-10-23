import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { CreateNewPasswordForm } from 'features/auth/recovery/ui/CreateNewPassword'
import { store } from 'store/store'

const meta = {
  title: 'Auth/Create New Password Form',
  component: CreateNewPasswordForm,
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
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=301-5678&mode=design&t=6uYwrdp5m2F8ORTm-4',
    },
  },
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta
type Story = StoryObj<typeof CreateNewPasswordForm>

export const CreateNewPasswordFormStory: Story = {
  render: args => {
    return <CreateNewPasswordForm />
  },
}
