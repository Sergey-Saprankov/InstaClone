import type { Meta, StoryObj } from '@storybook/react'

import { ControlledInputNew } from 'shared/ui/ControlledInput/ControlledInput'

const meta = {
  title: 'Components/ControlledInputNew',
  component: ControlledInputNew,
  tags: ['autodocs'],
} satisfies Meta<typeof ControlledInputNew>

export default meta
type Story = StoryObj<typeof ControlledInputNew>

export const ControlledInputNew1: Story = {
  args: {},
}
