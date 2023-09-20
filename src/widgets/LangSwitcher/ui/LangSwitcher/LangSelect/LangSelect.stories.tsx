import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { LangSelect } from 'widgets/LangSwitcher/ui/LangSwitcher/LangSelect/LangSelect'

const meta = {
  title: 'Widgets/LangSwitcher/LangSelect',
  component: LangSelect,
  tags: ['autodocs'],
  // args: { value: { g } },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=314-5903&mode=design&t=1Qxn1IAPmgfTw0Cw-4',
    },
  },
} satisfies Meta<typeof LangSelect>

export default meta
type Story = StoryObj<typeof LangSelect>

export const LangSelectStory: Story = {
  render: (args, { globals: { locale } }) => {
    const [value, setValue] = useState(locale)
    const onChangeValue = (locale: string) => {
      setValue(locale)
    }

    return <LangSelect options={['ru', 'en']} value={value} onChange={onChangeValue} />
  },
}
