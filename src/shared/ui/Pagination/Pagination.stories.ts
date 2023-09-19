import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from 'shared/ui/Pagination/Pagination'

const meta = {
  title: 'Components/ok/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=1787-9974&mode=design&t=yyw98nZI3wYnazbx-4',
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof Pagination>

export const PaginationStory: Story = {
  args: {},
}
