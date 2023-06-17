import type { Meta, StoryObj } from '@storybook/react'

import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: 'text',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DefaultDark: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}

export const Clear: Story = {
  args: {
    theme: ThemeButton.Clear,
  },
}

export const ClearDark: Story = {
  args: {
    theme: ThemeButton.Clear,
  },
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}

export const Outline: Story = {
  args: {
    theme: ThemeButton.Outline,
  },
}

export const OutlineDark: Story = {
  args: {
    theme: ThemeButton.Outline,
  },
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}
