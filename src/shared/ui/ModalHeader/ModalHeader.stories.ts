import type { Meta, StoryObj } from '@storybook/react'

import { ModalHeader } from 'shared/ui/ModalHeader/ModalHeader'

const meta = {
  title: 'Components/ModalHeader',
  component: ModalHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof ModalHeader>

export default meta
type Story = StoryObj<typeof ModalHeader>

export const InputTypeFile1: Story = {
  args: {},
}
