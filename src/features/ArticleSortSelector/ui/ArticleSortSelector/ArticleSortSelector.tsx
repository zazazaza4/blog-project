import {
  FC, memo, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '@/entities/Article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { Select, SelectOption } from '@/shared/ui/Select';

import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo((
  props: ArticleSortSelectorProps,
) => {
  const {
    onChangeOrder,
    onChangeSort,
    order,
    sort,
    className,
  } = props;

  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('asc'),
    },
    {
      value: 'desc',
      content: t('desc'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('created'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('title'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('views'),
    },
  ], [t]);

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('sort')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('by')}
        value={order}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  );
});
