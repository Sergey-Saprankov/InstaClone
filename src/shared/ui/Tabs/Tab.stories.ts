import type { Meta, StoryObj } from '@storybook/react'

import { Tab } from 'shared/ui/Tabs/Tab'

const meta = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
} satisfies Meta<typeof Tab>

export default meta
type Story = StoryObj<typeof Tab>

export const InputTypeFile1: Story = {
  args: {},
}
