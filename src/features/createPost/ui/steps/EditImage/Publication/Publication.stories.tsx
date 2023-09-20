import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { Publication } from 'features/createPost/ui/steps/EditImage/Publication/Publication'
import { store } from 'store/store'

const meta = {
  title: 'Create Post/Two Click/Edit Image/Publication',
  component: Publication,
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
} satisfies Meta<typeof Publication>

export default meta
type Story = StoryObj<typeof Publication>

export const PublicationStory: Story = {
  render: () => {
    return <Publication />
  },
}
