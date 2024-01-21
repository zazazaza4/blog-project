import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Tabs } from './Tabs';

const tabs = [
  {
    value: 'tab 1',
    content: 'tab 1',
  },
  {
    value: 'tab 2',
    content: 'tab 2',
  },
  {
    value: 'tab 3',
    content: 'tab 3',
  },
  {
    value: 'tab 4',
    content: 'tab 4',
  },
  {
    value: 'tab 5',
    content: 'tab 5',
  },
];

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    tabs,
    value: 'tab 2',
    onTabClick: () => {},
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
