import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { AppImage } from './AppImage';

const meta = {
    title: 'shared/AppImage',
    component: AppImage,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
