import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from 'shared/ui/Slider/Slider'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof Slider>

export const InputTypeFile1: Story = {
  args: {},
}
