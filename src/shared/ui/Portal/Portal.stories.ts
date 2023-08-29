import type { Meta, StoryObj } from '@storybook/react'

import { Portal } from 'shared/ui/Portal/Portal'

const meta = {
  title: 'Components/Portal',
  component: Portal,
  tags: ['autodocs'],
} satisfies Meta<typeof Portal>

export default meta
type Story = StoryObj<typeof Portal>

export const InputTypeFile1: Story = {
  args: {},
}
