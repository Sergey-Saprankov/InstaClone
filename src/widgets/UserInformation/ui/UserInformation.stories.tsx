import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { store } from 'store/store'
import { UserInformation } from 'widgets/UserInformation/ui/UserInformation'

const meta = {
  title: 'Widgets/UserInformation',
  component: UserInformation,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=314-6048&mode=design&t=1Qxn1IAPmgfTw0Cw-4',
    },
  },
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} satisfies Meta<typeof UserInformation>

export default meta
type Story = StoryObj<typeof UserInformation>

export const UserInformationStory: Story = {
  render: () => {
    return <UserInformation />
  },
}
