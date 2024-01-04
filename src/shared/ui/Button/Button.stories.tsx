import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Test',
  },
};

export const Clear: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const BackgroudTheme: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroudInvertedTheme: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareSize: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    isSquare: true,
  },
};

export const Outline: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const SquareSizeM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
    size: ButtonSize.M,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
    size: ButtonSize.XL,
  },
};
