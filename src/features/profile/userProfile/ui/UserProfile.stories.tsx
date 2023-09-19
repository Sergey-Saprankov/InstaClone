import React from 'react'

import { GoogleOAuthProvider } from '@react-oauth/google'
import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { UserProfile } from 'features/profile/userProfile/ui/UserProfile'
import { store } from 'store/store'

// @ts-ignore
const meta = {
  title: 'Profile/UserProfile',
  component: UserProfile,
  decorators: [
    Story => (
      <Provider store={store}>
        <GoogleOAuthProvider clientId="617342613759-f3kbvgm8l310fn40vh6qna2pv8u2uccr.apps.googleusercontent.com">
          <Story />
        </GoogleOAuthProvider>
      </Provider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof UserProfile>

export default meta
type Story = StoryObj<typeof UserProfile>

export const UserProfileStory: Story = {
  render: args => {
    return <UserProfile />
  },
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=303-3570&mode=design&t=YfNBlyurujtK4coF-0',
    },
  },
}
// export const Light: Story = {
//   args: {
//     children: 'Light Button',
//     disabled: false,
//     size: ButtonSize.XXl,
//     theme: ButtonTheme.LIGHT,
//     // fullWidth: true,
//   },
// }
//
// export const Secondary: Story = {
//   args: {
//     variant: 'secondary',
//     children: 'Secondary Button',
//     disabled: false,
//   },
// }
// export const Tertiary: Story = {
//   args: {
//     variant: 'tertiary',
//     children: 'Tertiary Button',
//     disabled: false,
//   },
// }
// export const Link: Story = {
//   args: {
//     variant: 'link',
//     children: 'Tertiary Button',
//     disabled: false,
//   },
// }
//
// export const FullWidth: Story = {
//   args: {
//     variant: 'primary',
//     children: 'Full Width Button',
//     disabled: false,
//     fullWidth: true,
//   },
// }
