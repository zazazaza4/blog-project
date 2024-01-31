import { screen } from '@testing-library/react';

import { UserRole } from '@/entities/User';

import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { AppRouter } from './AppRouter';

describe('app/router/AppRouter', () => {
  test('', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('not found', async () => {
    componentRender(<AppRouter />, {
      route: '/afsfsfsfdsfsdfsfdsd',
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('redirecting not auth user to main page', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Profile page', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _inited: true,
          authDate: {},
        },
      },
    });

    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('a user does not have an admin role', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authDate: {},
        },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('a user have an admin role', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authDate: {
            roles: [UserRole.ADMIN],
          },
        },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
