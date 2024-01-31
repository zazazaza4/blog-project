import type { Preview } from '@storybook/react';

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { Theme } from '../../src/shared/const/theme';

const preview: Preview = {
  decorators: [
    TranslationDecorator,
    StyleDecorator,
    RouterDecorator,
    SuspenseDecorator,
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    themes: {
      default: 'Light',
      list: [
        { name: 'Light', class: Theme.LIGHT, color: '#fff' },
        { name: 'Dark', class: Theme.DARK, color: '#000' },
        { name: 'Orange', class: Theme.ORANGE, color: '#ffb005' },
      ],
    },
  },
};

export default preview;
