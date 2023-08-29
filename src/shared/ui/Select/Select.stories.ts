import type { Meta, StoryObj } from '@storybook/react'

import { SelectOld } from 'shared/ui/Select/Select'

const meta = {
  title: 'Components/SelectOld',
  component: SelectOld,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectOld>

export default meta
type Story = StoryObj<typeof SelectOld>

export const InputTypeFile1: Story = {
  args: {},
}
