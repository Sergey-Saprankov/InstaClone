import React, { CSSProperties } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { DeleteImageModal } from 'features/createPost/ui/steps/EditImage/DeleteImageModal/DeleteImageModal'
import { store } from 'store/store'

const meta = {
  title: 'Create Post/Two Click/Edit Image/Delete Image Modal',
  component: DeleteImageModal,
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
} satisfies Meta<typeof DeleteImageModal>

export default meta
type Story = StoryObj<typeof DeleteImageModal>

export const DeleteImageModalStory: Story = {
  render: () => {
    const height: CSSProperties = {
      height: '20vh',
    }

    return (
      <div style={height}>
        <DeleteImageModal />
      </div>
    )
  },
}
