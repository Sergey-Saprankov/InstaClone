import type { Meta, StoryObj } from '@storybook/react'

import { Select } from 'shared/ui/Pagination/Select/Select'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof Select>

export const InputTypeFile1: Story = {
  args: {},
}
