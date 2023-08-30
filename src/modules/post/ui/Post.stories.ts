import type { Meta, StoryObj } from '@storybook/react'

import { Post } from 'modules/post/ui/Post'

const meta = {
  title: 'Post/UI/Post',
  component: Post,
  tags: ['autodocs'],
} satisfies Meta<typeof Post>

export default meta
type Story = StoryObj<typeof Post>

export const Primary: Story = {
  args: {},
}
