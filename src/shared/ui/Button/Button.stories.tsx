import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'

const meta = {
  title: 'Components/ok/Button',
  component: Button,
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=303-3570&mode=design&t=YfNBlyurujtK4coF-0',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const ButtonStory: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    size: ButtonSize.XXl,
    theme: ButtonTheme.PRIMARY,
  },
}
