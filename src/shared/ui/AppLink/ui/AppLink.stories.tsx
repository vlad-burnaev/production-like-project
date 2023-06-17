import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink";

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: [ 'autodocs' ],
  argTypes: {},
  args: {
    children: 'Text',
    to: '/'
  },
} satisfies Meta<typeof AppLink>;

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.Primary
  }
}

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.Primary
  },
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.Secondary
  }
}

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.Secondary
  },
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}