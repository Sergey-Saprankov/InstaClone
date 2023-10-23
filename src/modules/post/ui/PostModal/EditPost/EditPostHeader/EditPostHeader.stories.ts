import type { Meta, StoryObj } from '@storybook/react'

import { EditPostHeader } from 'modules/post/ui/PostModal/EditPost/EditPostHeader/EditPostHeader'

const meta = {
  title: 'Post/UI/PostModal/EditPostHeader',
  component: EditPostHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof EditPostHeader>

export default meta
type Story = StoryObj<typeof EditPostHeader>

export const Primary: Story = {
  args: {},
}
