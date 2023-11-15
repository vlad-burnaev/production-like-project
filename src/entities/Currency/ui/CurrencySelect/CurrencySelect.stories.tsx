import { type Meta, type StoryObj } from '@storybook/react'
import { CurrencySelect } from 'entities/Currency'

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  tags: ['autodocs'],
} satisfies Meta<typeof CurrencySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
