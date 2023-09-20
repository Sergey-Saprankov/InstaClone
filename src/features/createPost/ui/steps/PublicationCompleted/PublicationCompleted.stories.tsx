import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { PublicationCompleted } from 'features/createPost/ui/steps/PublicationCompleted/PublicationCompleted'
import { store } from 'store/store'

const meta = {
  title: 'Create Post/Two Click/Publication Completed',
  component: PublicationCompleted,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=316-7328&mode=design&t=1Qxn1IAPmgfTw0Cw-4',
    },
  },
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} satisfies Meta<typeof PublicationCompleted>

export default meta
type Story = StoryObj<typeof PublicationCompleted>

export const PublicationCompletedStory: Story = {
  render: () => {
    return <PublicationCompleted />
  },
}
