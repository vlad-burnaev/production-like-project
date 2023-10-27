import { type Meta, type StoryObj } from '@storybook/react'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Some title',
    text: 'some text',
  },
}

export const PrimaryDark: Story = {
  args: {
    title: 'Some title',
    text: 'some text',
  },
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}

export const Error: Story = {
  args: {
    title: 'Some title',
    text: 'some text',
    theme: TextTheme.ERROR,
  },
}

export const ErrorDark: Story = {
  args: {
    title: 'Some title',
    text: 'some text',
    theme: TextTheme.ERROR,
  },
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}

export const TitleOnly: Story = {
  args: {
    title: 'Some title',
  },
}

export const TextOnly: Story = {
  args: {
    text: 'Some text',
  },
}
