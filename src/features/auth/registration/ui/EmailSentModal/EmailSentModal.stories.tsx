import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { EmailSentModal } from 'features/auth/registration/ui/EmailSentModal/EmailSentModal'
import cls from 'features/auth/registration/ui/RegistrationForm/RegistrationForm.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ModalHeader } from 'shared/ui/ModalHeader/ModalHeader'
import { store } from 'store/store'

const meta = {
  title: 'Auth/EmailSentModal',
  component: EmailSentModal,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=1632-8891&mode=design&t=6uYwrdp5m2F8ORTm-4',
    },
  },
} satisfies Meta<typeof EmailSentModal>

export default meta
type Story = StoryObj<typeof EmailSentModal>

export const EmailSentModalStory: Story = {
  render: args => {
    const setOnHandler = () => {
      console.log()
    }

    return (
      <div className={cls.wrapper}>
        <div className={cls.container}>
          <ModalHeader title={'title'} handleButtonClick={setOnHandler} />
          <div className={cls.main}>
            <div className={cls.description}>
              We have sent a link to confirm your email to {'email' ?? 'your email'}
            </div>
            <div className={cls.btnContainer}>
              <Button theme={ButtonTheme.PRIMARY} onClick={setOnHandler} className={cls.okBtn}>
                OK
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  },
}
