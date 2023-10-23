import type { Meta, StoryObj } from '@storybook/react'

import { ModalHeader } from 'shared/ui/ModalHeader/ModalHeader'

const meta = {
  title: 'Components/ok/ModalHeader',
  component: ModalHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof ModalHeader>

export default meta
type Story = StoryObj<typeof ModalHeader>

export const ModalHeaderStory: Story = {
  args: { title: 'title' },
}
