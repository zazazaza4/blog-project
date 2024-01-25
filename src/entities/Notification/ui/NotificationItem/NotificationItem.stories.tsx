import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { NotificationItem } from './NotificationItem';

const meta = {
  title: 'shared/NotificationItem',
  component: NotificationItem,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
