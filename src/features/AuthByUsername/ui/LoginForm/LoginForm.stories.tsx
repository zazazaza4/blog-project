import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import LoginForm from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'Ivan',
      password: '12345',
    },
  }),
];

export const WithError: Story = {};
WithError.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'Ivan',
      password: '12345',
      error: 'Error',
    },
  }),
];

export const Loading: Story = {};
Loading.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'Ivan',
      password: '12345',
      isLoading: true,
    },
  }),
];

export const Dark: Story = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: 'Ivan',
      password: '12345',
    },
  }),
];

export const WithErrorDark: Story = {};
WithErrorDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: 'Ivan',
      password: '12345',
      error: 'Error',
    },
  }),
];

export const LoadingDark: Story = {};
LoadingDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: 'Ivan',
      password: '12345',
      isLoading: true,
    },
  }),
];
