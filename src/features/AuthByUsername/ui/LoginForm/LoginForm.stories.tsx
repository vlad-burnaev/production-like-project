import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'login',
        password: 'password',
      },
    }),
  ],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DefaultDark: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}

export const Loading: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        isLoading: true,
      },
    }),
  ],
}

export const Error: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        error: 'ERROR',
      },
    }),
  ],
}
