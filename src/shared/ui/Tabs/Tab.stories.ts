import type { Meta, StoryObj } from '@storybook/react'

import { Tab } from 'shared/ui/Tabs/Tab'

const meta = {
  title: 'Components/ok/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=306-7411&mode=design&t=yyw98nZI3wYnazbx-4',
    },
  },
} satisfies Meta<typeof Tab>

export default meta
type Story = StoryObj<typeof Tab>

export const TabActive: Story = {
  args: { value: 'tab-1', currentValue: 'tab-1' },
}
export const TabNotActive: Story = {
  args: { value: 'tab-1', currentValue: 'tab-2' },
}
