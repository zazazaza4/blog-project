import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/editableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  username: '21212',
  age: 32,
  lastName: 'last name',
  firstName: 'first name',
  city: 'Kharkiv',
  country: Country.Ukraine,
  currency: Currency.UAH,
};

describe('profileSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(profileReducer(
        state as ProfileSchema,
        profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { lastName: '' } };

    expect(profileReducer(
        state as ProfileSchema,
        profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { lastName: 'last' } };

    expect(profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          lastName: 'first',
        }),
    )).toEqual({
      form: {
        lastName: 'first',
      },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
    };

    expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.pending,
    )).toEqual({
      validateErrors: undefined,
      isLoading: true,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
    };

    expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
    )).toEqual({
      validateErrors: undefined,
      isLoading: false,
      readonly: true,
      form: data,
      data,
    });
  });
});
