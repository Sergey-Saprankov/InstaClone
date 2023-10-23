import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from 'shared/ui/Slider/Slider'

const meta = {
  title: 'Components/ok/Slider',
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof Slider>

export const SliderStory: Story = {
  args: { currentIndex: 5, endIndex: 10, variant: 'small' },
}
