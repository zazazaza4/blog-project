import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { CommentCard } from './CommentCard';

const comment = {
  id: '1',
  text: 'some comment 1',
  user: {
    id: '1',
    username: 'd',
  },
};

const meta = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
  argTypes: {},

} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    comment,
  },
};

export const Dark: Story = {
  args: {
    comment,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading: Story = {
  args: {
    comment,
    isLoading: true,
  },
};
