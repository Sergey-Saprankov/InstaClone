import type { Meta, StoryObj } from '@storybook/react'

import { Post } from 'modules/post/ui/Post'

const meta = {
  title: 'User/UI/UserAvatarSmall',
  component: Post,
  tags: ['autodocs'],
} satisfies Meta<typeof Post>

export default meta
type Story = StoryObj<typeof Post>

export const Primary: Story = {
  args: {},
}
