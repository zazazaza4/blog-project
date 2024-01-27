import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StarRating } from './StarRating';

const meta = {
  title: 'shared/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithSelected: Story = {
  args: {
    selectedStars: 3,
  },
};
