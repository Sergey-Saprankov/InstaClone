import type { Meta, StoryObj } from '@storybook/react'

import { SlideCounter } from 'shared/ui/SlideCounter/SlideCounter'

const meta = {
  title: 'Components/SlideCounter',
  component: SlideCounter,
  tags: ['autodocs'],
} satisfies Meta<typeof SlideCounter>

export default meta
type Story = StoryObj<typeof SlideCounter>

export const InputTypeFile1: Story = {
  args: {},
}
