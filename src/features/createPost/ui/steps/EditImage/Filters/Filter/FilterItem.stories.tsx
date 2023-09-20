import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { FilterItem } from 'features/createPost/ui/steps/EditImage/Filters/Filter/FilterItem'
import { filters } from 'features/createPost/ui/steps/EditImage/Filters/Filters'
import { store } from 'store/store'

const meta = {
  title: 'Create Post/Two Click/Edit Image/Filters/FilterItem',
  component: FilterItem,
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
} satisfies Meta<typeof FilterItem>

export default meta
type Story = StoryObj<typeof FilterItem>

export const FiltersStory: Story = {
  render: () => {
    return (
      <div>
        {filters.map(el => (
          <FilterItem key={el.id} filter={el.filter} title={el.title} />
        ))}
      </div>
    )
  },
}
