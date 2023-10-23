import type { Meta, StoryObj } from '@storybook/react'

import {
  Text,
  TextColorTheme,
  TextFontTheme,
} from '../../../../../InstaCloneMy/src/shared/ui/Text/Text'

const meta = {
  title: 'Components/ok/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    font: TextFontTheme,
    color: TextColorTheme,
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof Text>

export const TextH1: Story = {
  args: {
    children: ' Text h1',
    color: TextColorTheme.PRIMARY,
    font: TextFontTheme.INTER_BOLD_L,
    tag: 'span',
  },
}
