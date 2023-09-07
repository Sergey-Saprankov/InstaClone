import type { Preview } from '@storybook/react'
import '../src/styles/globals.scss'
import '../src/styles/dataPickerGlobal.scss'
import '../src/styles/nprogress.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: 'black' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
  },
}
// addDecorator(withProvider)
export default preview
