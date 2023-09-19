import type { Meta, StoryObj } from '@storybook/react'

import { SomethingWentWrong } from 'shared/ui/SomethingWentWrong/SomethingWentWrong'

const meta = {
  title: 'Components/ok/SomethingWentWrong',
  component: SomethingWentWrong,
  tags: ['autodocs'],
} satisfies Meta<typeof SomethingWentWrong>

export default meta
type Story = StoryObj<typeof SomethingWentWrong>

export const SomethingWentWrongStory: Story = {
  args: {},
}
