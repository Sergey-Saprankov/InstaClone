import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import Favorites from 'pages/favorites/index'

const meta = {
  title: 'Pages/Favorites',
  component: Favorites,
  tags: ['autodocs'],
  // parameters: {
  //   design: {
  //     type: 'figma',
  //     url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=301-5874&mode=design&t=6uYwrdp5m2F8ORTm-4',
  //   },
  // },
  // decorators: [
  //   Story => (
  //     <Provider store={store}>
  //       <GoogleOAuthProvider clientId="617342613759-f3kbvgm8l310fn40vh6qna2pv8u2uccr.apps.googleusercontent.com">
  //         <Story />
  //       </GoogleOAuthProvider>
  //     </Provider>
  //   ),
  // ],
} satisfies Meta<typeof Favorites>

export default meta
type Story = StoryObj<typeof Favorites>

export const FavoritesStory: Story = {
  render: () => {
    return <Favorites />
  },
}
