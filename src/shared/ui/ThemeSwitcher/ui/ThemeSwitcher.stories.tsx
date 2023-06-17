import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: [ 'autodocs' ],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}