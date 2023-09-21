import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import Statistics from 'pages/statistics/index'

const meta = {
  title: 'Pages/Statistics',
  component: Statistics,
  tags: ['autodocs'],
  // parameters: {
  //   design: {
  //     type: 'figma',
  //     url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=306-5067&mode=design&t=tETCZWr8PNXPQquC-4',
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
} satisfies Meta<typeof Statistics>

export default meta
type Story = StoryObj<typeof Statistics>

export const StatisticsStory: Story = {
  render: () => {
    return <Statistics />
  },
}
