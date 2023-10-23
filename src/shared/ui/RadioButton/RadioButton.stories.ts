import type { Meta, StoryObj } from '@storybook/react'

import { RadioButton } from 'shared/ui/RadioButton/RadioButton'

const meta = {
  title: 'Components/ok/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof RadioButton>

export const RadioButtonStory: Story = {
  args: {},
}
