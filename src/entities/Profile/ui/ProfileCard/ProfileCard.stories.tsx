import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ProfileCard } from 'entities/Profile'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import avatar from 'shared/assets/tests/avatar.png'

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    data: {
      avatar,
      username: 'vlad-burn',
      firstname: 'Vlad',
      lastname: 'Burnaev',
      age: 26,
      country: Country.Russia,
      city: 'Moscow',
      currency: Currency.RUB,
    },
  },
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DefaultDark: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}

export const Error: Story = {
  args: {
    error: 'SOME ERROR',
  },
}
