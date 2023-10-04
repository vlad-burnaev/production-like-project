import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DefaultDark: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}
