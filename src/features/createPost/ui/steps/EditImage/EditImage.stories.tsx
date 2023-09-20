import React, { CSSProperties } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { EditImage } from 'features/createPost/ui/steps/EditImage/EditImage'
import { store } from 'store/store'

const meta = {
  title: 'Create Post/Two Click/Edit Image/Edit Image',
  component: EditImage,
  tags: ['autodocs'],
  // parameters: {
  //   design: {
  //     type: 'figma',
  //     url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=316-7328&mode=design&t=1Qxn1IAPmgfTw0Cw-4',
  //   },
  // },
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} satisfies Meta<typeof EditImage>

export default meta
type Story = StoryObj<typeof EditImage>

export const EditImageStory: Story = {
  render: () => {
    const height: CSSProperties = {
      height: '45vh',
    }

    return (
      <div style={height}>
        <EditImage />
      </div>
    )
  },
}
