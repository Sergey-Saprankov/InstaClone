import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { InputTypeFilePlus } from 'features/createPost/ui/steps/EditImage/popovers/crop/PopoverGallery/InputTypeFilePlus'
import { store } from 'store/store'

const meta = {
  title: 'Create Post/Two Click/Edit Image/Popovers/Crop/Popover Gallery/InputTypeFilePlus',
  component: InputTypeFilePlus,
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
} satisfies Meta<typeof InputTypeFilePlus>

export default meta
type Story = StoryObj<typeof InputTypeFilePlus>

export const InputTypeFilePlusStory: Story = {
  render: args => {
    return <InputTypeFilePlus setSelectedImage={args.setSelectedImage} />
  },
}
