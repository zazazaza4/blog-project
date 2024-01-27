import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import AvatarImg from '@/shared/assets/tests/storybook.png';

import { Navbar } from './Navbar';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Navbar>;

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
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authDate: {
      avatar: AvatarImg,
      id: '1',
    },
  },
})];

export const NoAuth: Story = {};
NoAuth.decorators = [StoreDecorator({})];
