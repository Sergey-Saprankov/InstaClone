import type { Meta, StoryObj } from '@storybook/react'

import { SlideCounter } from 'shared/ui/SlideCounter/SlideCounter'

const meta = {
  title: 'Components/ok/SlideCounter',
  component: SlideCounter,
  tags: ['autodocs'],
} satisfies Meta<typeof SlideCounter>

export default meta
type Story = StoryObj<typeof SlideCounter>

export const SlideCounterStory: Story = {
  args: { length: 20, currentIndex: 3 },
}
