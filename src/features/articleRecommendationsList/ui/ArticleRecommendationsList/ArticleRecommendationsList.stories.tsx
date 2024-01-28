import type { Meta, StoryObj } from '@storybook/react';

import { Article } from '@/entities/Article';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  user: {
    id: '1',
    username: 'username',
  },
  blocks: [],
  subtitle: 'asdasda',
  title: '123',
  type: [],
};

const meta = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=4`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' },
          { ...article, id: '4' },
        ],
      },
    ],
  },
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [StoreDecorator({})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
