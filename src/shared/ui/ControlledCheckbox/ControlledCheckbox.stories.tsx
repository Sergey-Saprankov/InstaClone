import type { Meta, StoryObj } from '@storybook/react'

import { useRegisterForm } from 'shared/hooks/useRegisterForm'
import { ControlledCheckbox } from 'shared/ui/ControlledCheckbox/ControlledCheckbox'

const meta = {
  title: 'Components/ok/ControlledCheckbox',
  component: ControlledCheckbox,
  tags: ['autodocs'],
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof ControlledCheckbox>

export default meta
type Story = StoryObj<typeof ControlledCheckbox>

export const Controlled: Story = {
  render: args => {
    const { control } = useRegisterForm()

    return <ControlledCheckbox control={control} name={'agree'} />
  },
}
