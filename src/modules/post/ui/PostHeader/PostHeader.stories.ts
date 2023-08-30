import type { Meta, StoryObj } from '@storybook/react'

import { PostHeader } from 'modules/post/ui/PostHeader/PostHeader'

const meta = {
  title: 'Post/UI/PostHeader',
  component: PostHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof PostHeader>

export default meta
type Story = StoryObj<typeof PostHeader>

export const Primary: Story = {
  args: {},
}
