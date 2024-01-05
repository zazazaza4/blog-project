import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string

}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input type="text" autofocus className={cls.input} placeholder={t('login.enter.username')} />
      <Input type="password" className={cls.input} placeholder={t('login.enter.password')} />
      <Button className={cls.loginBtn}>
        {t('header.login')}
      </Button>
    </div>
  );
};
