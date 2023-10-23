import type { Meta, StoryObj } from '@storybook/react'

import { NotComments } from 'modules/post/ui/PostBody/NotComments/NotComment'

const meta = {
  title: 'Post/UI/PostBody/NotComments',
  component: NotComments,
  tags: ['autodocs'],
} satisfies Meta<typeof NotComments>

export default meta
type Story = StoryObj<typeof NotComments>

export const Primary: Story = {
  args: {},
}
