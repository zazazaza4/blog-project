import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';

import { Profile } from '../../model/types/profile';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency: (currency: Currency) => void;
  onChangeCountry: (country: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  isLoading,
  readonly,
  error,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack max justify="center" className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack justify="center" className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('error.title')}
          text={t('error.text')}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack max gap="8" className={classNames(cls.ProfileCard, mods, [className])}>
      { data?.avatar && (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar src={data.avatar} alt={t('avatar')} />
        </HStack>
      )}
      <Input
        value={data?.firstName}
        placeholder={t('firstName')}
        className={cls.input}
        onChange={onChangeFirstname}
        readonly={readonly}
      />
      <Input
        value={data?.lastName}
        placeholder={t('lastName')}
        className={cls.input}
        onChange={onChangeLastname}
        readonly={readonly}
      />
      <Input
        value={data?.age}
        placeholder={t('age')}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('city')}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('username')}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('avatar')}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
};
