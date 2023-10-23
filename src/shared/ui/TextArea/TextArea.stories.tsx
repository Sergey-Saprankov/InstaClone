import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from 'shared/ui/TextArea/TextArea'

const meta = {
  title: 'Components/ok/TextArea/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=316-8163&mode=design&t=yyw98nZI3wYnazbx-4',
    },
  },
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof TextArea>

export const TextAreaStory: Story = {
  args: {},
}
