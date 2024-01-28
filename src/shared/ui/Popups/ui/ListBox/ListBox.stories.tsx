import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ListBox } from './ListBox';

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  tags: ['autodocs'],
  argTypes: {
  },
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
  args: {
    defaultValue: 'select a value',
    value: 'value1',
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

export const TopLeft: Story = {
  args: {
    direction: 'top left',
  },
};

export const TopRight: Story = {
  args: {
    direction: 'top right',
  },
};

export const BottomRight: Story = {
  args: {
    direction: 'bottom right',
  },
};

export const BottomLeft: Story = {
  args: {
    direction: 'bottom left',
  },
};
