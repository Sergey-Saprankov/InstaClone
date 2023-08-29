import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from 'shared/ui/TextArea/TextArea'

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof TextArea>

export const TextH1: Story = {
  args: {},
}
