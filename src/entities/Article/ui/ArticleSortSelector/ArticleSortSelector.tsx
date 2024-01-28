import {
  FC, memo, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { Select } from '@/shared/ui/Select';

import { SelectOption } from '../../../../shared/ui/Select/Select';
import { ArticleSortField } from '../../model/consts/articleConsts';

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

  const orderOptions = useMemo<SelectOption[]>(() => [
    {
      value: 'asc',
      content: t('asc'),
    },
    {
      value: 'desc',
      content: t('desc'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption[]>(() => [
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

  const changeSortHandler = useCallback((newSort: string) => {
    onChangeSort(newSort as ArticleSortField);
  }, [onChangeSort]);

  const changeOrderHandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as SortOrder);
  }, [onChangeOrder]);

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('sort')}
        value={sort}
        onChange={changeSortHandler}
      />
      <Select
        options={orderOptions}
        label={t('by')}
        value={order}
        onChange={changeOrderHandler}
        className={cls.order}
      />
    </div>
  );
});
