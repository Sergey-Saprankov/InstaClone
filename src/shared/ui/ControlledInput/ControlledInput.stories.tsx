import type { Meta, StoryObj } from '@storybook/react'

import { useRegisterForm } from 'shared/hooks/useRegisterForm'
import { ControlledInput } from 'shared/ui/ControlledInput/ControlledInput'

const meta = {
  title: 'Components/ok/ControlledInput',
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=303-3468&mode=design&t=yyw98nZI3wYnazbx-4',
    },
  },
} satisfies Meta<typeof ControlledInput>

export default meta
type Story = StoryObj<typeof ControlledInput>

export const ControlledInputStory: Story = {
  render: args => {
    const { control } = useRegisterForm()

    return (
      <div>
        <ControlledInput control={control} name={'email'} />
        <ControlledInput control={control} name={'password'} />
        <ControlledInput control={control} name={'confirmPassword'} />
      </div>
    )
  },
}
