import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import i18n from 'shared/config/i18n/i18n';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    password, username, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('login.modal.title')} />
      <Input
        type="text"
        autofocus
        onChange={onChangeUsername}
        value={username}
        className={cls.input}
        placeholder={t('login.enter.username')}
      />
      <Input
        type="password"
        onChange={onChangePassword}
        value={password}
        className={cls.input}
        placeholder={t('login.enter.password')}
      />
      {error && <Text text={i18n.t('login.modal.error')} theme={TextTheme.ERROR} />}
      <Button
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        isDisabled={isLoading}
      >
        {t('header.login')}
      </Button>
    </div>
  );
});
