import type { Meta, StoryObj } from '@storybook/react'

import { NavLink } from 'shared/ui/NavLink/Navlink'

const meta = {
  title: 'Components/NavLink',
  component: NavLink,
  tags: ['autodocs'],
} satisfies Meta<typeof NavLink>

export default meta
type Story = StoryObj<typeof NavLink>

export const NavLinkStory: Story = {
  args: {},
}
