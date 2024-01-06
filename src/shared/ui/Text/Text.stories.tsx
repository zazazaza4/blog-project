import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'lorem lorem lorem lorem lorem',
  },
};

export const Error: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: 'Title',
    text: 'lorem lorem lorem lorem lorem',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'lorem lorem lorem lorem lorem',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: 'lorem lorem lorem lorem lorem',
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title',
  },
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
  args: {
    text: 'lorem lorem lorem lorem lorem',
  },
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
