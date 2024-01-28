import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { NotificationList } from './NotificationList';

const meta = {
  title: 'entities/NotificationButton/NotificationList',
  component: NotificationList,
  tags: ['autodocs'],
  argTypes: {},

} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
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
  StoreDecorator({}),
];

export const Dark: Story = {
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [
          {
            id: '1',
            title: 'title',
            description: 'description',
          },
        ],
      },
    ],
  },
};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
];
