import type { Meta, StoryObj } from '@storybook/react'

import { PostFooter } from 'modules/post/ui/PostFooter/PostFooter'

const meta = {
  title: 'Post/UI/PostFooter',
  component: PostFooter,
  tags: ['autodocs'],
} satisfies Meta<typeof PostFooter>

export default meta
type Story = StoryObj<typeof PostFooter>

export const Primary: Story = {
  args: {},
}
