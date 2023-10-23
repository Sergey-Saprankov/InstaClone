import type { Meta, StoryObj } from '@storybook/react'

import { SliderRange } from 'shared/ui/SliderRange/SliderRange'

const meta = {
  title: 'Components/ok/SliderRange',
  component: SliderRange,
  tags: ['autodocs'],
} satisfies Meta<typeof SliderRange>

export default meta
type Story = StoryObj<typeof SliderRange>

export const SliderRangeStory: Story = {
  args: { scale: 2 },
}
