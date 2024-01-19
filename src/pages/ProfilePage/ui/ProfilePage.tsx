import {
  FC, useCallback, useEffect, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from 'entities/Profile';

import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const { id } = useParams<{id: string}>();
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = useMemo(
    () => ({
      [ValidateProfileError.SERVER_ERROR]: t('error.server'),
      [ValidateProfileError.INCORRECT_AGE]: t('error.age'),
      [ValidateProfileError.NO_DATA]: t('error.data'),
      [ValidateProfileError.INCORRECT_USER_DATA]: t('error.user'),
    }),
    [t],
  );

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback(
    (value: string = '') => {
      dispatch(profileActions.updateProfile({ firstName: value }));
    },
    [dispatch],
  );

  const onChangeLastname = useCallback(
    (value: string = '') => {
      dispatch(profileActions.updateProfile({ firstName: value }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value: string = '') => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value: string = '0') => {
      const regex = /^[0-9\b]+$/;
      if (value === '0' || regex.test(value)) {
        dispatch(profileActions.updateProfile({ age: Number(value) }));
      }
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value: string = '') => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value: string = '') => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency: Currency = Currency.USD) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country: Country = Country.Ukraine) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <Page className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {
          validateErrors?.length && validateErrors.map((err) => (
            <Text
              key={err}
              theme={TextTheme.ERROR}
              text={validateErrorTranslates[err]}
            />
          ))
        }
        <ProfileCard
          data={formData}
          error={error}
          readonly={readonly}
          isLoading={isLoading}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
