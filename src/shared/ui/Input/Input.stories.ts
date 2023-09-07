import type { Meta, StoryObj } from '@storybook/react'

import { Input } from 'shared/ui/Input/Input'

const meta = {
  title: 'Components/ok/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

export const Input1: Story = {
  args: {
    title: 'title',
    error: 'error',
  },
}
