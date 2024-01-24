import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ArticleSortField } from '../../model/consts/articleConsts';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
  title: 'entities/Article/ArticleSortSelector',
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
