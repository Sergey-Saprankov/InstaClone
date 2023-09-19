import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from 'shared/ui/Checkbox/Checkbox'

const meta = {
  title: 'Components/ok/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=5783-12902&mode=design&t=yyw98nZI3wYnazbx-4',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

export const CheckBoxStory: Story = {
  args: {
    checked: true,
    disabled: true,
    height: '18px',
    width: '18px',
  },
}
