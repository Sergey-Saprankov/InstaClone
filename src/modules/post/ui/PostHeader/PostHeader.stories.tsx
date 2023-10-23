import React, { CSSProperties } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { PostHeader } from 'modules/post/ui/PostHeader/PostHeader'
import { store } from 'store/store'

const meta = {
  title: 'Post/UI/PostHeader',
  component: PostHeader,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} satisfies Meta<typeof PostHeader>

export default meta
type Story = StoryObj<typeof PostHeader>

export const PostHeaderStory: Story = {
  render: args => {
    const height: CSSProperties = {
      height: '50vh',
      width: '40vh',
    }

    return (
      <div style={height}>
        <PostHeader
          src={args.src}
          alt={args.alt}
          descriptionPost={args.descriptionPost}
          onChangeOpenPost={args.onChangeOpenPost}
          currentId={args.currentId}
        />
      </div>
    )
  },
}
