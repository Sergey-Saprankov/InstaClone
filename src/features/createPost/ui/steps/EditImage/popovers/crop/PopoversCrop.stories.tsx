import React, { CSSProperties } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { PopoversCrop } from 'features/createPost/ui/steps/EditImage/popovers/crop/PopoversCrop'
import { store } from 'store/store'

const meta = {
  title: 'Create Post/Two Click/Edit Image/Popovers/Crop/Popovers Crop',
  component: PopoversCrop,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=316-7328&mode=design&t=1Qxn1IAPmgfTw0Cw-4',
    },
  },
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} satisfies Meta<typeof PopoversCrop>

export default meta
type Story = StoryObj<typeof PopoversCrop>

export const PopoversCropStory: Story = {
  render: args => {
    const height: CSSProperties = {
      height: '40vh',
      width: '40vh',
    }

    return (
      <div style={height}>
        <PopoversCrop parentRef={args.parentRef} />
      </div>
    )
  },
}
