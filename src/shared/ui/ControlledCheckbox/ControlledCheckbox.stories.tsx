import type { Meta, StoryObj } from '@storybook/react'

import { useRegisterForm } from 'shared/hooks/useRegisterForm'
import { ControlledCheckbox } from 'shared/ui/ControlledCheckbox/ControlledCheckbox'

const meta = {
  title: 'Components/ok/ControlledCheckbox',
  component: ControlledCheckbox,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=5783-12902&mode=design&t=yyw98nZI3wYnazbx-4',
    },
  },
} satisfies Meta<typeof ControlledCheckbox>

export default meta
type Story = StoryObj<typeof ControlledCheckbox>

export const ControlledCheckboxStory: Story = {
  render: args => {
    const { control } = useRegisterForm()

    return <ControlledCheckbox control={control} name={'agree'} />
  },
}
