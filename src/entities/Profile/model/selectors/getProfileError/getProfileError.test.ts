import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { readonly: true, isLoading: false, error: 'error' },
    };
    expect(getProfileError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual('');
  });
});
