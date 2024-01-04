import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '#',
  },
  argTypes: {},
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Inverted: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.INVERTED,
  },
};

export const Red: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.RED,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.INVERTED,
  },
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.RED,
  },
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
