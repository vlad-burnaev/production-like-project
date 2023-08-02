import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from 'shared/ui/Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    isOpen: true,
    children: 'SOME TEXT',
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
  ],
}
