import type { Meta, StoryObj } from '@storybook/react'

import { useRegisterForm } from 'shared/hooks/useRegisterForm'
import { ControlledInput } from 'shared/ui/ControlledInput/ControlledInput'

const meta = {
  title: 'Components/ControlledInput',
  component: ControlledInput,
  tags: ['autodocs'],
  argTypes: {
    name: {
      options: ['email', 'password', 'userName', 'confirmPassword', 'agree'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof ControlledInput>

export default meta
type Story = StoryObj<typeof ControlledInput>

export const ControlledInputNew1: Story = {
  render: args => {
    const { control } = useRegisterForm()

    return (
      <div>
        <ControlledInput control={control} name={'password'} />
        <ControlledInput control={control} name={'confirmPassword'} />
      </div>
    )
  },
}
