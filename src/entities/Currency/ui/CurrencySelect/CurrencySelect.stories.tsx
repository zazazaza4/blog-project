import type { Meta, StoryObj } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  tags: ['autodocs'],
  args: {
  },
  argTypes: {},
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {};
Primary.decorators = [
  (Story) => (
    <div
      style={{
        paddingTop: 150,
        paddingLeft: 30,
      }}
    >
      <Story />
    </div>
  ),
];
