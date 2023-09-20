import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { SelectImage } from 'features/createPost/ui/steps/SelectImage/SelectImage'
import { store } from 'store/store'

const meta = {
  title: 'Create Post/First Click/Select Image',
  component: SelectImage,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=306-5244&mode=design&t=1Qxn1IAPmgfTw0Cw-4',
    },
  },
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} satisfies Meta<typeof SelectImage>

export default meta
type Story = StoryObj<typeof SelectImage>

export const SelectImageStory: Story = {
  render: () => {
    return <SelectImage />
  },
}
