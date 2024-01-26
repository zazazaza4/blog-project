import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import AvatarImg from '@/shared/assets/tests/storybook.png';

import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({
      data,
    }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({
      status: 403,
    }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
