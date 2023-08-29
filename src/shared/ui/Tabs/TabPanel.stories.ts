import type { Meta, StoryObj } from '@storybook/react'

import { TabPanel } from 'shared/ui/Tabs/TabPanel'

const meta = {
  title: 'Components/TabPanel',
  component: TabPanel,
  tags: ['autodocs'],
} satisfies Meta<typeof TabPanel>

export default meta
type Story = StoryObj<typeof TabPanel>

export const InputTypeFile1: Story = {
  args: {},
}
