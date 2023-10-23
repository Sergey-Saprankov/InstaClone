import React, { CSSProperties } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import Terms from 'pages/auth/terms/index'

const meta = {
  title: 'Pages/Auth/Terms',
  component: Terms,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=16760-12586&mode=design&t=tETCZWr8PNXPQquC-4',
    },
  },
} satisfies Meta<typeof Terms>

export default meta
type Story = StoryObj<typeof Terms>

export const TermsStory: Story = {
  render: () => {
    const height: CSSProperties = {
      zoom: '0.7',
    }

    return (
      <div style={height}>
        <Terms />
      </div>
    )
  },
}
