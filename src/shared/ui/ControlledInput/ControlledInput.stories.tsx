import type { Meta, StoryObj } from '@storybook/react'

import { ControlledInput } from 'shared/ui/ControlledInput/ControlledInput'

const meta = {
  title: 'Components/ControlledInput',
  component: ControlledInput,
  tags: ['autodocs'],
  // argTypes: {
  //   type: {
  //     options: ['text', 'email', 'password', 'file', 'checkbox'],
  //     control: {
  //       type: 'select',
  //     },
  //   },
  // },
  // argTypes: { control: { email: 'qwqwqwqwqwq@gmai.com', password: 'qweqweqwe@@@@qaewrqwre' } },
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
