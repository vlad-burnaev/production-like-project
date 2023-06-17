import type { Preview } from '@storybook/react'

import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecoracor } from "shared/config/storybook/RouterDecoracor";

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
  decorators: [
    RouterDecoracor(),
    ThemeDecorator(Theme.Light),
  ],
}

export default preview
