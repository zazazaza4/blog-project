import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { [FTName] } from './[FTName]';

const meta = {
  title: 'shared/[FTName]',
  component: [FTName],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof [FTName]>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
