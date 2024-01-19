import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { Article } from 'entities/Article';

import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (props, { extra, rejectWithValue, getState }) => {
    const { page = 1 } = props;
    const limit = getArticlesPageLimit(getState());

    try {
      const response = await extra.api.get('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);