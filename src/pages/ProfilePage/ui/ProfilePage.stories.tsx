import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ProfilePage } from 'pages'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import avatar from 'shared/assets/tests/avatar.png'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}
