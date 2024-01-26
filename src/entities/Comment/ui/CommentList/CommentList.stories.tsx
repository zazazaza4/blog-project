import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { CommentList } from './CommentList';

const comments = [
  {
    id: '1',
    text: 'some comment 1',
    user: {
      id: '1',
      username: 'd',
    },
  },
  {
    id: '2',
    text: 'some comment 2',
    user: {
      id: '1',
      username: 'd',
    },
  },
  {
    id: '3',
    text: 'some comment 2',
    user: {
      id: '1',
      username: 'd',
    },
  },
];

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  tags: ['autodocs'],
  argTypes: {},

} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    comments,
  },
};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading: Story = {
  args: {
    comments,
    isLoading: true,
  },
};
