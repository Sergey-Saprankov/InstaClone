import type { Meta, StoryObj } from '@storybook/react'

import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'

const meta = {
  title: 'Components/ok/LoaderContent',
  component: LoaderContent,
  tags: ['autodocs'],
} satisfies Meta<typeof LoaderContent>

export default meta
type Story = StoryObj<typeof LoaderContent>

export const InputTypeFile1: Story = {
  args: {},
}
