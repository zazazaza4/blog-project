import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSortField } from '@/entities/Article';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
  title: 'features/ArticleSortSelector',
  component: ArticleSortSelector,
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    order: 'asc',
    sort: ArticleSortField.CREATED,
  },
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
