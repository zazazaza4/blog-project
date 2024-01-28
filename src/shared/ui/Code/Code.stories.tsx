import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Code } from './Code';

const meta = {
  title: 'shared/Code',
  component: Code,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    text: `
    import type { Meta, StoryObj } from '@storybook/react';

    import { Theme } from 'app/providers/ThemeProvider';

    import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

    import { Code } from './Code';

    const meta = {
      title: 'shared/Code',
      component: Code,
      tags: ['autodocs'],
      argTypes: {},
    } satisfies Meta<typeof Code>;

    export default meta;
    type Story = StoryObj<typeof meta>;
    `,
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
