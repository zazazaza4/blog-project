/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'first',
      },
      {
        content: 'second',
      },
      {
        content: 'third',
      },
    ],
  },
};

export const Dark: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'first',
      },
      {
        content: 'second',
      },
      {
        content: 'third',
      },
    ],
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
