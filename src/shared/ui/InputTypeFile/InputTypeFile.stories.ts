import type { Meta, StoryObj } from '@storybook/react'

import { InputTypeFile } from 'shared/ui/InputTypeFile/InputTypeFile'

const meta = {
  title: 'Components/ok/InputTypeFile',
  component: InputTypeFile,
  tags: ['autodocs'],
} satisfies Meta<typeof InputTypeFile>

export default meta
type Story = StoryObj<typeof InputTypeFile>

export const InputTypeFile1: Story = {
  args: {},
}
