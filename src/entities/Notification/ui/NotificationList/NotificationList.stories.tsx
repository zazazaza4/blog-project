import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { NotificationList } from './NotificationList';

const meta = {
  title: 'shared/NotificationList',
  component: NotificationList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
