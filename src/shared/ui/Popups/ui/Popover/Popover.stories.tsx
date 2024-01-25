/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button } from '../../../Button/Button';
import { Popover } from './Popover';

const meta = {
  title: 'shared/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: (
      <div>
        Some info
      </div>
    ),
    trigger: (
      <Button>
        Click
      </Button>
    ),
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
