/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta = {
  title: 'shared/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
      </>
    ),
  },
};

export const RowGap4: Story = {
  args: {
    gap: '4',
    children: (
      <>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
      </>
    ),
  },
};

export const RowGap8: Story = {
  args: {
    gap: '8',
    children: (
      <>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
      </>
    ),
  },
};

export const RowGap16: Story = {
  args: {
    gap: '16',
    children: (
      <>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
      </>
    ),
  },
};

export const RowGap32: Story = {
  args: {
    gap: '16',
    children: (
      <>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
      </>
    ),
  },
};

export const ColumnGap16: Story = {
  args: {
    gap: '16',
    direction: 'column',
    children: (
      <>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
      </>
    ),
  },
};

export const ColumnAlignCenter: Story = {
  args: {
    align: 'center',
    direction: 'column',
    children: (
      <>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
      </>
    ),
  },
};

export const ColumnAlignStart: Story = {
  args: {
    align: 'start',
    direction: 'column',
    children: (
      <>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
      </>
    ),
  },
};

export const ColumnAlignEnd: Story = {
  args: {
    align: 'end',
    direction: 'column',
    children: (
      <>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
        <div>test text</div>
      </>
    ),
  },
};
