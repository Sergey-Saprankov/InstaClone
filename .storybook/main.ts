import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-designs',
    '@storybook/addon-actions',
  ],
  previewHead: head => `
    ${head}
    <style>
      html, body {
        background: #827979;
        width: 100vh;
      }
    </style>
 `,
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: [{ from: '../public', to: '/public' }],
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async config => {
    const imageRule = config.module?.rules?.find(rule => {
      const test = (rule as { test: RegExp }).test

      if (!test) {
        return false
      }

      return test.test('.svg')
    }) as { [key: string]: any }

    imageRule.exclude = /\.svg$/

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
export default config
