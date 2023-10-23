import type { Meta, StoryObj } from '@storybook/react'

import { useRegisterForm } from 'shared/hooks/useRegisterForm'
import { ControlledTextArea } from 'shared/ui/ControlledTextArea/ControlledTextArea'

const meta = {
  title: 'Components/ok/TextArea/ControlledTextArea',
  component: ControlledTextArea,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=316-8163&mode=design&t=yyw98nZI3wYnazbx-4',
    },
  },
} satisfies Meta<typeof ControlledTextArea>

export default meta
type Story = StoryObj<typeof ControlledTextArea>

export const ControlledTextAreaStory: Story = {
  render: args => {
    const { control } = useRegisterForm()

    return (
      <div>
        <ControlledTextArea control={control} name={'email'} />
      </div>
    )
  },
}
