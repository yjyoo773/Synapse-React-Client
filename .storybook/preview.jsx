import React from 'react'
import '../src/demo/style/DemoStyle.scss'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import { Buffer } from 'buffer'
import { StorybookComponentWrapper } from '../src/lib/containers/StorybookComponentWrapper'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { getHandlers } from '../src/mocks/msw/handlers'
import { MOCK_REPO_ORIGIN } from '../src/lib/containers/StackChanger'

globalThis.Buffer = Buffer
globalThis.process = {
  browser: true,
  env: {
    NODE_ENV: 'development',
    NODE_DEBUG: undefined,
  },
}

if (process.env.NODE_ENV === 'development') {
  // whyDidYouRender is a dev/debugging tool that logs to the console with information about why a component rendered
  // It won't track most components by default. Follow these instructions to track a component
  // https://github.com/welldone-software/why-did-you-render#tracking-components
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  })
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: [
      // Only return mocked data when making requests to our mock stack
      ...getHandlers(MOCK_REPO_ORIGIN),
    ],
  },
}

// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass',
})

export const decorators = [
  mswDecorator,
  Story => (
    <StorybookComponentWrapper>
      <Story />
    </StorybookComponentWrapper>
  ),
]

export default {
  parameters,
  decorators,
}
