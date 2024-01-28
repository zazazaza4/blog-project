import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { EditableProfileCard } from './EditableProfileCard';

const meta = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    id: '1',
  },
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
