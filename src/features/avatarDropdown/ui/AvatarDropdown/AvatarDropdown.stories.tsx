import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import AvatarImg from '@/shared/assets/tests/storybook.png';

import { AvatarDropdown } from './AvatarDropdown';

const meta = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [StoreDecorator({
  user: {
    authDate: {
      avatar: AvatarImg,
      id: '1',
    },
  },
})];

export const Dark: Story = {};
Dark.decorators = [
  StoreDecorator({
    user: {
      authDate: {
        avatar: AvatarImg,
        id: '1',
      },
    },
  }),
  ThemeDecorator(Theme.DARK),
];
