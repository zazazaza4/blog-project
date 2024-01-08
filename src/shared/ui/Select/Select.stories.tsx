import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
  },
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Select a value',
    options: [
      {
        value: '1',
        content: 'First',
      },
      {
        value: '2',
        content: 'Second',
      },
      {
        value: '3',
        content: 'Third',
      },
    ],
  },
};
