import type { Meta, StoryObj } from '@storybook/react'

import { EditPost } from 'modules/post/ui/PostModal/EditPost/EditPost'

const meta = {
  title: 'Post/UI/PostModal/EditPost',
  component: EditPost,
  tags: ['autodocs'],
} satisfies Meta<typeof EditPost>

export default meta
type Story = StoryObj<typeof EditPost>

export const Primary: Story = {
  args: {},
}
