import type { Meta, StoryObj } from '@storybook/react'

import { DeletePost } from 'modules/post/ui/PostModal/DeletePost/DeletePost'

const meta = {
  title: 'Post/UI/PostModal/DeletePost',
  component: DeletePost,
  tags: ['autodocs'],
} satisfies Meta<typeof DeletePost>

export default meta
type Story = StoryObj<typeof DeletePost>

export const Primary: Story = {
  args: {},
}
