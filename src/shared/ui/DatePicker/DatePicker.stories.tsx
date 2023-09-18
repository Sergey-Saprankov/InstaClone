import React, { CSSProperties } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { CustomDatePicker } from 'shared/ui/DatePicker/DatePicker'

const meta = {
  title: 'Components/ok/DatePicker',
  component: CustomDatePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomDatePicker>

export default meta
type Story = StoryObj<typeof CustomDatePicker>

export const DatePicker1: Story = {
  render: args => {
    const height: CSSProperties = {
      height: '40vh',
    }

    return (
      <div style={height}>
        <CustomDatePicker />
      </div>
    )
  },
}
