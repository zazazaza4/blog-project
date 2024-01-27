import { Suspense } from 'react';
import { Decorator } from '@storybook/react';

import { Loader } from '@/shared/ui/Loader/Loader';

import '@/app/styles/index.scss';

export const SuspenseDecorator: Decorator = (Story) => (
  <Suspense fallback={<Loader />}>
    <Story />
  </Suspense>
);
