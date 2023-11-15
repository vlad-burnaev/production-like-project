import { type Meta, type StoryObj } from '@storybook/react'
import { Select } from 'shared/ui/Select/Select'

const meta = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'some-id',
    name: 'some-name',
    label: 'Ваше имя',
    options: [
      { value: 'Вася', content: 'Вася' },
      { value: '2', content: 2 },
      { value: 3, content: 3 },
      { value: 'Безымянный', content: null },
    ],
  },
}
