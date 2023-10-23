import React, { CSSProperties } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { LangOption } from 'widgets/LangSwitcher/ui/LangSwitcher/LangOption/LangOption'

const meta = {
  title: 'Widgets/LangSwitcher/LangOption',
  component: LangOption,
  tags: ['autodocs'],
  args: { language: 'en' },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=314-5903&mode=design&t=1Qxn1IAPmgfTw0Cw-4',
    },
  },
} satisfies Meta<typeof LangOption>

export default meta
type Story = StoryObj<typeof LangOption>

export const LangOptionStory: Story = {
  render: args => {
    const background: CSSProperties = {
      background: 'gray',
    }

    return (
      <div style={background}>
        <LangOption language={args.language} />
      </div>
    )
  },
}
