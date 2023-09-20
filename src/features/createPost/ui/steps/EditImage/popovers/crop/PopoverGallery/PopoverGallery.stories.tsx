import React, { CSSProperties } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { PopoverGallery } from 'features/createPost/ui/steps/EditImage/popovers/crop/PopoverGallery/PopoverGallery'
import { store } from 'store/store'

const meta = {
  title: 'Create Post/Two Click/Edit Image/Popovers/Crop/Popover Gallery',
  component: PopoverGallery,
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
} satisfies Meta<typeof PopoverGallery>

export default meta
type Story = StoryObj<typeof PopoverGallery>

export const PopoverGalleryStory: Story = {
  render: () => {
    const height: CSSProperties = {
      height: '40vh',
    }

    return (
      <div style={height}>
        <PopoverGallery />
      </div>
    )
  },
}
