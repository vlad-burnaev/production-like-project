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
    theme: ButtonTheme.CLEAR,
  },
}

export const ClearInverted: Story = {
  args: {
    theme: ButtonTheme.CLEAR_INVERTED,
  },
}

export const ClearDark: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}

export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
}

export const OutlineL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
}

export const OutlineXL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
}

export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}

export const Background: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
}

export const BackgroundDark: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}

export const BackgroundInverted: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
}

export const BackgroundInvertedDark: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}

export const SquareM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
}

export const SquareL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
}

export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
}

export const Disabled: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.OUTLINE,
  },
}
