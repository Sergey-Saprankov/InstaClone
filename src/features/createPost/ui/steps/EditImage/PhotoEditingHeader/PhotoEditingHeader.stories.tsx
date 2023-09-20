import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { PhotoEditingHeader } from 'features/createPost/ui/steps/EditImage/PhotoEditingHeader/PhotoEditingHeader'
import { store } from 'store/store'

const meta = {
  title: 'Create Post/Two Click/Edit Image/Photo Editing Header',
  component: PhotoEditingHeader,
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
} satisfies Meta<typeof PhotoEditingHeader>

export default meta
type Story = StoryObj<typeof PhotoEditingHeader>

export const PhotoEditingHeaderStory: Story = {
  render: args => {
    return <PhotoEditingHeader onPublishPost={args.onPublishPost} />
  },
}
