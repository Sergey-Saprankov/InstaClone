import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { Filters } from 'features/createPost/ui/steps/EditImage/Filters/Filters'
import { store } from 'store/store'

const meta = {
  title: 'Create Post/Two Click/Edit Image/Filters/Filters',
  component: Filters,
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
} satisfies Meta<typeof Filters>

export default meta
type Story = StoryObj<typeof Filters>

export const FiltersStory: Story = {
  render: () => {
    return <Filters />
  },
}
