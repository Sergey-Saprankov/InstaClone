import type { Meta, StoryObj } from '@storybook/react'

import { TabsExample } from 'shared/ui/Tabs/TabsExample'

const meta = {
  title: 'Components/TabsExample',
  component: TabsExample,
  tags: ['autodocs'],
} satisfies Meta<typeof TabsExample>

export default meta
type Story = StoryObj<typeof TabsExample>

export const InputTypeFile1: Story = {
  args: {},
}
