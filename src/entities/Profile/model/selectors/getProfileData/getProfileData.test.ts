import { StateSchema } from 'app/providers/StoreProvider';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import AvatarImg from 'shared/assets/tests/storybook.png';

import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return data', () => {
    const data = {
      username: '21212',
      age: 32,
      lastName: 'last name',
      firstName: 'first name',
      city: 'Kharkiv',
      country: Country.Ukraine,
      currency: Currency.UAH,
      avatar: AvatarImg,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
