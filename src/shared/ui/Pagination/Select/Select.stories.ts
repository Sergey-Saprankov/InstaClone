import type { Meta, StoryObj } from '@storybook/react'

import { Select } from 'shared/ui/Pagination/Select/Select'

const meta = {
  title: 'Components/ok/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=1787-9974&mode=design&t=yyw98nZI3wYnazbx-4',
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof Select>

export const SelectStory: Story = {
  args: {},
}
