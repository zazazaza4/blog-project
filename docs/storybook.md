## Storybook

In the project, each component is described with story cases.
Server requests are mocked using the storybook-addon-mock.

The file with story cases is created next to the component with the extension .stories.tsx.

You can run Storybook with the command:
- `npm run storybook`

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
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

