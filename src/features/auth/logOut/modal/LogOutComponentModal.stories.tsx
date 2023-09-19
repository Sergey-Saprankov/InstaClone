import React from 'react'

import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { Modal } from 'features/auth/logOut/modal/modal'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Text, TextFontTheme } from 'shared/ui/Text/Text'
import { store } from 'store/store'

const meta = {
  title: 'Auth/LogOutComponentModal',
  component: Modal,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const LogOutComponentModalStory: Story = {
  render: args => {
    const { t } = useTranslation()
    const actionString = 'action'
    const email = 'This you email'

    return (
      <Modal
        title={t.logOutModal.logOut}
        onSubmit={() => action(actionString)}
        onClose={() => action(actionString)}
        active={true}
      >
        <Text tag={'p'} font={TextFontTheme.INTER_REGULAR_L}>
          {t.logOutModal.confirmation}
        </Text>
        <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L}>{`"${email}" ?`}</Text>;
      </Modal>
    )
  },
}
