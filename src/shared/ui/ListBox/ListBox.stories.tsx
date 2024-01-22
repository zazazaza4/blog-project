import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ListBox } from './ListBox';

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    defaultValue: 'select a value',
    items: [
      { value: 'value1', content: 'content1' },
      { value: 'value2', content: 'content2', disabled: true },
      { value: 'value3', content: 'content3' },
    ],
  },
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled: Story = {
  args: {
    readonly: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Test label',
  },
};
