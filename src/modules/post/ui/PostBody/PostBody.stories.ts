import type { Meta, StoryObj } from '@storybook/react'

import { PostBody } from 'modules/post/ui/PostBody/PostBody'

const meta = {
  title: 'Post/UI/PostBody',
  component: PostBody,
  tags: ['autodocs'],
} satisfies Meta<typeof PostBody>

export default meta
type Story = StoryObj<typeof PostBody>

export const Primary: Story = {
  args: {},
}
