import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string

}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('error.message')}</p>
      <Button onClick={reloadPage}>
        {t('error.button')}
      </Button>
    </div>
  );
};
