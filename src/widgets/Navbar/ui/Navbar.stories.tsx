import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Navbar } from 'widgets'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const LightAuthorized: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          username: 'test',
        },
      },
    }),
  ],
}

export const DarkAuthorized: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
    StoreDecorator({
      user: {
        authData: {
          username: 'test',
        },
      },
    }),
  ],
}

export const LightUnauthorized: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: undefined,
      },
    }),
  ],
}

export const DarkUnauthorized: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
    StoreDecorator({
      user: {
        authData: undefined,
      },
    }),
  ],
}
