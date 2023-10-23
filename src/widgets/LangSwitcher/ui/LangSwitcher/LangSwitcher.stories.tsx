import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher/LangSwitcher'

const meta = {
  title: 'Widgets/LangSwitcher/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
  args: { isOpen: false },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=314-5903&mode=design&t=1Qxn1IAPmgfTw0Cw-4',
    },
  },
} satisfies Meta<typeof LangSwitcher>

export default meta
type Story = StoryObj<typeof LangSwitcher>

export const LangSwitcherStory: Story = {
  render: args => {
    return <LangSwitcher isOpen={args.isOpen} />
  },
}
