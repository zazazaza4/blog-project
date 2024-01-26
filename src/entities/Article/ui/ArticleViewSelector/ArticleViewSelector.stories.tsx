import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta = {
  title: 'entities/Article/ArticleViewSelector',
  component: ArticleViewSelector,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallLight: Story = {
  args: {
    view: ArticleView.SMALL,
  },
};

export const SmallDark: Story = {
  args: {
    view: ArticleView.SMALL,
  },
};
SmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BigLight: Story = {
  args: {
    view: ArticleView.BIG,
  },
};

export const BigDark: Story = {
  args: {
    view: ArticleView.BIG,
  },
};
BigDark.decorators = [ThemeDecorator(Theme.DARK)];
