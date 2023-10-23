import type { Meta, StoryObj } from '@storybook/react'

import { Card } from 'shared/ui/Card/Card'

const meta = {
  title: 'Components/ok/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=314-5839&mode=design&t=yyw98nZI3wYnazbx-4',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const CardStory: Story = {
  args: {
    alt: 'pic',
    src: 'https://placehold.jp/3d4070/ffffff/150x150.png',
    id: 1,
    withIcon: true,
  },
}
