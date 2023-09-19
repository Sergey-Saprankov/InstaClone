import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from 'shared/ui/Modal/Modal'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const ModalStory: Story = {
  args: {},
}
