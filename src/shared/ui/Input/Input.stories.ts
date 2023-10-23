import type { Meta, StoryObj } from '@storybook/react'

import { Input } from 'shared/ui/Input/Input'

const meta = {
  title: 'Components/ok/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=303-3468&mode=design&t=yyw98nZI3wYnazbx-4',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

export const InputStory: Story = {
  args: {
    title: 'title',
    error: 'error',
  },
}
