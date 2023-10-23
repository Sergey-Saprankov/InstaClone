import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { CreatePost } from 'features/createPost/ui/CreatePost'
import { store } from 'store/store'

const meta = {
  title: 'Create Post/Create Post',
  component: CreatePost,
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
} satisfies Meta<typeof CreatePost>

export default meta
type Story = StoryObj<typeof CreatePost>

export const CreatePostStory: Story = {
  render: () => {
    return <CreatePost />
  },
}
