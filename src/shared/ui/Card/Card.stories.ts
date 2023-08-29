import type { Meta, StoryObj } from '@storybook/react'

import { Card } from 'shared/ui/Card/Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const WithIconCard: Story = {
  args: {
    alt: 'pic',
    src: 'https://placehold.jp/3d4070/ffffff/150x150.png',
    id: 1,
    withIcon: true,
  },
}
