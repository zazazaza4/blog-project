import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { AvatarImg } from 'shared/assets/tests/storybook.png';

import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [StoreDecorator({
  profile: {
    form: {
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
})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
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
})];
