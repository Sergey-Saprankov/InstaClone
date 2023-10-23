import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Header } from 'widgets/Header/ui/Header'

const meta = {
  title: 'Widgets/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=314-5903&mode=design&t=1Qxn1IAPmgfTw0Cw-4',
    },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof Header>

export const HeaderStory: Story = {
  render: () => {
    return <Header />
  },
}
