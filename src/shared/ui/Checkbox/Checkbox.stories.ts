import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from 'shared/ui/Checkbox/Checkbox'

const meta = {
  title: 'Components/ok/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

export const CheckBoxIsChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    height: '18px',
    width: '18px',
  },
}
