import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from 'shared/ui/Checkbox/Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: CheckBox,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof CheckBox>

export const CheckBoxIsChecked: Story = {
  args: {
    isChecked: true,
    disabled: true,
    height: '18px',
    width: '18px',
  },
}
