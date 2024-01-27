import type { Meta, StoryObj } from '@storybook/react';

import { CountrySelect } from './CountrySelect';

const meta = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  tags: ['autodocs'],
  args: {
  },
  argTypes: {},
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {};
Primary.decorators = [
  (Story) => (
    <div
      style={{
        paddingTop: 50,
        paddingLeft: 30,
      }}
    >
      <Story />
    </div>
  ),
];
