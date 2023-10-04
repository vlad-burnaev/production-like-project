import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Input } from 'shared/ui'

const meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    placeholder: 'Введите логин',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DefaultDark: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}
