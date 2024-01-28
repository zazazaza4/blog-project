/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Text } from '../Text/Text';
import { Card } from './Card';

const meta = {
  title: 'shared/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: <Text title="Card" text="text" />,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
