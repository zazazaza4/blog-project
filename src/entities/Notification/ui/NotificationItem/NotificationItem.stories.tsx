import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { NotificationItem } from './NotificationItem';

const meta = {
  title: 'entities/NotificationButton/NotificationItem',
  component: NotificationItem,
  tags: ['autodocs'],
  argTypes: {},

} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    item: {
      id: '1',
      title: 'Notification 1',
      description: 'Some event occurred',
    },
  },
};

export const Dark: Story = {
  args: {
    item: {
      id: '1',
      title: 'Notification 1',
      description: 'Some event occurred',
    },
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Link: Story = {
  args: {
    item: {
      id: '1',
      title: 'Notification 1',
      description: 'Some event occurred',
      href: '#',
    },
  },
};
