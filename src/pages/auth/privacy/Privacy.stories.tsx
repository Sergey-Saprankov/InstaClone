import React, { CSSProperties } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import PrivacyPolicy from 'pages/auth/privacy/index'

const meta = {
  title: 'Pages/Auth/Privacy Policy',
  component: PrivacyPolicy,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=16760-8576&mode=design&t=tETCZWr8PNXPQquC-4',
    },
  },
} satisfies Meta<typeof PrivacyPolicy>

export default meta
type Story = StoryObj<typeof PrivacyPolicy>

export const PrivacyPolicyStory: Story = {
  render: () => {
    const height: CSSProperties = {
      zoom: '0.7',
    }

    return (
      <div style={height}>
        <PrivacyPolicy />
      </div>
    )
  },
}
