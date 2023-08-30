import type { Meta, StoryObj } from '@storybook/react'

import { ChangePostMenu } from 'modules/post/ui/PostModal/ChangePostMenu/ChangePostMenu'

const meta = {
  title: 'Post/UI/PostModal/ChangePostMenu',
  component: ChangePostMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof ChangePostMenu>

export default meta
type Story = StoryObj<typeof ChangePostMenu>

export const Primary: Story = {
  args: {},
}
