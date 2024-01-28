import { Decorator } from '@storybook/react';

import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);
