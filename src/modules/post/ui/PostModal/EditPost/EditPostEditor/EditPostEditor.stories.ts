import type { Meta, StoryObj } from '@storybook/react'

import { EditPostEditor } from 'modules/post/ui/PostModal/EditPost/EditPostEditor/EditPostEditor'

const meta = {
  title: 'Post/UI/PostModal/EditPostEditor',
  component: EditPostEditor,
  tags: ['autodocs'],
} satisfies Meta<typeof EditPostEditor>

export default meta
type Story = StoryObj<typeof EditPostEditor>

export const Primary: Story = {
  args: {},
}
