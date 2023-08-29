import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from 'shared/ui/Tabs/Tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof Tabs>

export const InputTypeFile1: Story = {
  args: {},
}
