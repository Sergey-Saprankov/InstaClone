import type { Meta, StoryObj } from '@storybook/react'

import { LogOutComponent } from 'features/auth/logOut/ui/LogOutComponent'

const meta = {
  title: 'Components/LogOutComponent',
  component: LogOutComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof LogOutComponent>

export default meta
type Story = StoryObj<typeof LogOutComponent>

export const Primary: Story = {
  args: {},
}
