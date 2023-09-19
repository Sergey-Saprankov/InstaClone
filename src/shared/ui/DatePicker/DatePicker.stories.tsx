import React, { CSSProperties } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { CustomDatePicker } from 'shared/ui/DatePicker/DatePicker'

const meta = {
  title: 'Components/ok/DatePicker',
  component: CustomDatePicker,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=348-7008&mode=design&t=yyw98nZI3wYnazbx-4',
    },
  },
} satisfies Meta<typeof CustomDatePicker>

export default meta
type Story = StoryObj<typeof CustomDatePicker>

export const DatePickerStory: Story = {
  render: args => {
    const height: CSSProperties = {
      height: '45vh',
    }

    return (
      <div style={height}>
        <CustomDatePicker />
      </div>
    )
  },
}
