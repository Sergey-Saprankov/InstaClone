import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { store } from 'store/store'
import { UserNavigation } from 'widgets/UserNavigation/ui/UserNavigation'

const meta = {
  title: 'Widgets/UserNavigation',
  component: UserNavigation,
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
} satisfies Meta<typeof UserNavigation>

export default meta
type Story = StoryObj<typeof UserNavigation>

export const UserNavigationStory: Story = {
  render: () => {
    return <UserNavigation />
  },
}
