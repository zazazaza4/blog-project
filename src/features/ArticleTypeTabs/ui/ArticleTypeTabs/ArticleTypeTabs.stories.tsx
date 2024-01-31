import type { Meta, StoryObj } from '@storybook/react';

import { ArticleType } from '@/entities/Article';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
  title: 'entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    value: ArticleType.IT,
  },
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
