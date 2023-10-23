import React from 'react'

import { GoogleOAuthProvider } from '@react-oauth/google'
import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { store } from 'store/store'
import { Layout } from 'widgets/Layout/Layout'

const meta = {
  title: 'Widgets/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=26389-7071&mode=design&t=1Qxn1IAPmgfTw0Cw-4',
    },
  },
  decorators: [
    Story => (
      <Provider store={store}>
        <GoogleOAuthProvider clientId="617342613759-f3kbvgm8l310fn40vh6qna2pv8u2uccr.apps.googleusercontent.com">
          <Story />
        </GoogleOAuthProvider>
      </Provider>
    ),
  ],
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof Layout>

export const LayoutStory: Story = {
  render: () => {
    return <Layout />
  },
}
