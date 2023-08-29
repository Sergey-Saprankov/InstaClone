import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from 'shared/ui/Pagination/Pagination'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof Pagination>

export const InputTypeFile1: Story = {
  args: {},
}
