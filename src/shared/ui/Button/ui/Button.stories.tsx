import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
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
    theme: ButtonTheme.Clear,
  },
}

export const ClearInverted: Story = {
  args: {
    theme: ButtonTheme.ClearInverted,
  },
}

export const ClearDark: Story = {
  args: {
    theme: ButtonTheme.Clear,
  },
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}

export const Outline: Story = {
  args: {
    theme: ButtonTheme.Outline,
  },
}

export const OutlineL: Story = {
  args: {
    theme: ButtonTheme.Outline,
    size: ButtonSize.L,
  },
}

export const OutlineXL: Story = {
  args: {
    theme: ButtonTheme.Outline,
    size: ButtonSize.XL,
  },
}

export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.Outline,
  },
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}

export const Background: Story = {
  args: {
    theme: ButtonTheme.Background,
  },
}

export const BackgroundDark: Story = {
  args: {
    theme: ButtonTheme.Background,
  },
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}

export const BackgroundInverted: Story = {
  args: {
    theme: ButtonTheme.BackgroundInverted,
  },
}

export const BackgroundInvertedDark: Story = {
  args: {
    theme: ButtonTheme.BackgroundInverted,
  },
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}

export const SquareM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    square: true,
    size: ButtonSize.M,
  },
}

export const SquareL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    square: true,
    size: ButtonSize.L,
  },
}

export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    square: true,
    size: ButtonSize.XL,
  },
}

export const Disabled: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.Outline,
  },
}
