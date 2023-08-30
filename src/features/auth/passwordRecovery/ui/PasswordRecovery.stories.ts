import type { Meta, StoryObj } from '@storybook/react'

import { PasswordRecovery } from 'features/auth/passwordRecovery/ui/PasswordRecovery'

const meta = {
  title: 'Components/PasswordRecovery',
  component: PasswordRecovery,
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordRecovery>

export default meta
type Story = StoryObj<typeof PasswordRecovery>

export const Primary: Story = {
  args: {},
}
