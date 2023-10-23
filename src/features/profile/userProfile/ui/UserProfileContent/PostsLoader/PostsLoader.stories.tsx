import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { PostsLoader } from 'features/profile/userProfile/ui/UserProfileContent/PostsLoader/PostsLoader'
import { store } from 'store/store'

const meta = {
  title: 'Profile/User Profile Content/Posts Loader',
  component: PostsLoader,
  tags: ['autodocs'],
  // parameters: {
  //   design: {
  //     type: 'figma',
  //     url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=314-6048&mode=design&t=1Qxn1IAPmgfTw0Cw-4',
  //   },
  // },
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} satisfies Meta<typeof PostsLoader>

export default meta
type Story = StoryObj<typeof PostsLoader>

export const PostsLoaderStory: Story = {
  render: () => {
    return <PostsLoader />
  },
}
