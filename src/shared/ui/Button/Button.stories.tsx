import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'

const meta = {
  title: 'Components/ok/Button',
  component: Button,
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    size: ButtonSize.XXl,
    theme: ButtonTheme.PRIMARY,
    // fullWidth: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=303-3570&mode=design&t=YfNBlyurujtK4coF-0',
    },
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
