import type { Preview } from '@storybook/react'
import '../src/styles/globals.scss'
import '../src/styles/dataPickerGlobal.scss'
import '../src/styles/nprogress.scss'

const preview: Preview = {
  parameters: {
    docs: {
      inlineStories: false,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: 'black' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
  },
}
export default preview
