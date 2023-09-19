import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import Profile from 'pages/profile/index'
import { store } from 'store/store'

const meta = {
  title: 'Pages/Profile',
  component: Profile,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof Profile>

export const ProfileStory: Story = {
  args: Profile,
}
