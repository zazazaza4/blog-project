import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './[FTName].module.scss';

interface
[FTName]Props {
  className ?: string

}

export const [FTName]: FC<[FTName]Props> = memo((
  props: [FTName]Props) => {
  const { t } = useTranslation();
  const {
    className
  } = props;

  return (
    <div className={classNames(cls.[FTName], {}, [className])}>
      {t('')}
    </div>
  )
});