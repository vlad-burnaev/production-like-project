import { type Meta, type StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import AvatarImg from './avatar.png'

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: AvatarImg,
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Large: Story = {
  args: {
    size: 300,
  },
}

export const Small: Story = {
  args: {
    size: 50,
  },
}
