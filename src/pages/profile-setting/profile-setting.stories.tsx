import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import UserProfileSetting from 'pages/profile-setting/index'
import { store } from 'store/store'

const meta = {
  title: 'Pages/UserProfileSetting',
  component: UserProfileSetting,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
} satisfies Meta<typeof UserProfileSetting>

export default meta
type Story = StoryObj<typeof UserProfileSetting>

export const UserProfileSettingStory: Story = {
  args: UserProfileSetting,
}
