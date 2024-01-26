import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import AvatarImg from '@/shared/assets/tests/storybook.png';

import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      username: '21212',
      age: 32,
      lastName: 'last name',
      firstName: 'first name',
      city: 'Kharkiv',
      country: Country.Ukraine,
      currency: Currency.UAH,
      avatar: AvatarImg,
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'error',
  },
};

export const Dark: Story = {
  args: {
    data: {
      username: '21212',
      age: 32,
      lastName: 'last name',
      firstName: 'first name',
      city: 'Kharkiv',
      country: Country.Ukraine,
      currency: Currency.UAH,
      avatar: AvatarImg,
    },
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
