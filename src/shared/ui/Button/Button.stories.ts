import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: [ButtonSize],
    theme: [ButtonTheme],
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    size: ButtonSize.XXl,
    theme: ButtonTheme.PRIMARY,
    // fullWidth: true,
  },
}
export const Light: Story = {
  args: {
    children: 'Light Button',
    disabled: false,
    size: ButtonSize.XXl,
    theme: ButtonTheme.LIGHT,
    // fullWidth: true,
  },
}
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
