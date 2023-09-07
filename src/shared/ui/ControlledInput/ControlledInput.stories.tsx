import type { Meta, StoryObj } from '@storybook/react'

import { ControlledInput } from 'shared/ui/ControlledInput/ControlledInput'

const meta = {
  title: 'Components/ControlledInput',
  component: ControlledInput,
  tags: ['autodocs'],
  // argTypes: { control: HTMLInputElement },
} satisfies Meta<typeof ControlledInput>

export default meta
type Story = StoryObj<typeof ControlledInput>

export const ControlledInputNew1: Story = {
  // args: {
  //   defaultValue: 'John Doe',
  // },
  // argTypes: {
  //   control: { disable: true },
  // },
}
