import type { Meta, StoryObj } from '@storybook/react'

import { SliderRange } from 'shared/ui/SliderRange/SliderRange'

const meta = {
  title: 'Components/SliderRange',
  component: SliderRange,
  tags: ['autodocs'],
} satisfies Meta<typeof SliderRange>

export default meta
type Story = StoryObj<typeof SliderRange>

export const InputTypeFile1: Story = {
  args: {},
}
