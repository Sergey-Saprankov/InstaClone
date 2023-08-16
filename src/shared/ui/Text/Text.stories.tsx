import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

const meta = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    font: TextFontTheme,
    color: TextColorTheme,
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const TextH1: Story = {
  args: {
    children: ' Text h1',
    color: TextColorTheme.PRIMARY,
    font: TextFontTheme.INTER_BOLD_L,
  },
}
