import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticleRating from './ArticleRating';

const meta = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    articleId: '1',
  },
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-rating?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [
          { rate: 4 },
        ],
      },
    ],
  },
};
Light.decorators = [
  StoreDecorator({
    user: {
      authDate: {
        id: '1',
      },
    },
  }),
];

export const WithoutRate: Story = {
  args: {
    articleId: '1',
  },
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-rating?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [],
      },
    ],
  },
};
Light.decorators = [
  StoreDecorator({
    user: {
      authDate: {
        id: '1',
      },
    },
  }),
];
