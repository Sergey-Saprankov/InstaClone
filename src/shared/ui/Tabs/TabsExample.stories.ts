import type { Meta, StoryObj } from '@storybook/react'

import { TabsExample } from 'shared/ui/Tabs/TabsExample'

const meta = {
  title: 'Components/ok/TabsExample',
  component: TabsExample,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=306-7411&mode=design&t=yyw98nZI3wYnazbx-4',
    },
  },
} satisfies Meta<typeof TabsExample>

export default meta
type Story = StoryObj<typeof TabsExample>

export const TabsExampleStory: Story = {
  args: {},
}
