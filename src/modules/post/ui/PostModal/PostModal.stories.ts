import type { Meta, StoryObj } from '@storybook/react'

import { PostModal } from 'modules/post/ui/PostModal/PostModal'

const meta = {
  title: 'Post/UI/PostModal/PostModal',
  component: PostModal,
  tags: ['autodocs'],
} satisfies Meta<typeof PostModal>

export default meta
type Story = StoryObj<typeof PostModal>

export const Primary: Story = {
  args: {},
}
