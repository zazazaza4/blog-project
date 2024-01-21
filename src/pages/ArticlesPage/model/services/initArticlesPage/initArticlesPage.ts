import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { ArticleSortField } from 'entities/Article';

import { SortOrder } from 'shared/types';

import {
  getArticlesPageInited,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

const urlParamActionMapping: Record<string, (value: any) => void> = {
  order: articlesPageActions.setOrder,
  sort: articlesPageActions.setSort,
  search: articlesPageActions.setSearch,
  type: articlesPageActions.setType,
};

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, {
    getState, dispatch,
  }) => {
    const inited = getArticlesPageInited(getState());
    if (!inited) {
      Object.entries(urlParamActionMapping).forEach(([paramName, actionCreator]) => {
        const paramValue = searchParams.get(paramName) as string | undefined;

        if (paramValue) {
          dispatch(actionCreator(paramValue)!);
        }
      });

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({}));
    }
  },
);
