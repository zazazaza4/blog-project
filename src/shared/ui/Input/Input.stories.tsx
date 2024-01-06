import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    placeholder: 'Enter username',
    value: 'qwerty',
  },
};

export const Dark: Story = {
  args: {
    placeholder: 'Enter username',
    value: 'qwerty',
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
