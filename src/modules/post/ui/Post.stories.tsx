import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { Post } from 'modules/post/ui/Post'
import { store } from 'store/store'

const meta = {
  title: 'Post/UI/Post',
  component: Post,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Post>

export default meta
type Story = StoryObj<typeof Post>

export const PostStory: Story = {
  args: {},
}
