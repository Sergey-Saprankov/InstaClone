import type { Meta, StoryObj } from '@storybook/react'

import { LoaderLogo } from 'shared/ui/LoaderLogo/LoaderLogo'

const meta = {
  title: 'Components/LoaderLogo',
  component: LoaderLogo,
  tags: ['autodocs'],
} satisfies Meta<typeof LoaderLogo>

export default meta
type Story = StoryObj<typeof LoaderLogo>

export const InputTypeFile1: Story = {
  args: {},
}
