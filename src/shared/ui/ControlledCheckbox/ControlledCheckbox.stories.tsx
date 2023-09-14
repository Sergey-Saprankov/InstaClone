import type { Meta, StoryObj } from '@storybook/react'

import { ControlledCheckbox } from 'shared/ui/ControlledCheckbox/ControlledCheckbox'

const meta = {
  title: 'Components/ControlledCheckbox',
  component: ControlledCheckbox,
  tags: ['autodocs'],

  // argTypes: { control: { email: 'qwqwqwqwqwq@gmai.com', password: 'qweqweqwe@@@@qaewrqwre' } },
} satisfies Meta<typeof ControlledCheckbox>

export default meta
type Story = StoryObj<typeof ControlledCheckbox>

export const ControlledCheckbox1: Story = {
  render: ControlledCheckbox,
  // args: {
  //   defaultValue: 'John Doe',
  // },
  // argTypes: {
  //   control: { disable: true },
  // },
}
