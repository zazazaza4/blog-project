import { ArticleView } from '@/entities/Article';

import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { articlesPageActions, articlesPageReducer } from './articlesPageSlice';

describe('ArticlesPageSlice', () => {
  it('should handle setting view', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      view: ArticleView.SMALL,
    };

    const nextState = articlesPageReducer(
      state as ArticlesPageSchema,
      articlesPageActions.setView(ArticleView.BIG),
    );

    expect(nextState.view).toEqual(ArticleView.BIG);
  });

  it('should handle setting page', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      page: 1,
    };

    const nextState = articlesPageReducer(
      state as ArticlesPageSchema,
      articlesPageActions.setPage(2),
    );

    expect(nextState.page).toEqual(2);
  });

  it('should handle initializing state', () => {
    localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, ArticleView.BIG);

    const state: DeepPartial<ArticlesPageSchema> = {
      view: ArticleView.SMALL,
      limit: 9,
    };

    const nextState = articlesPageReducer(
      state as ArticlesPageSchema,
      articlesPageActions.initState(),
    );

    expect(nextState.view).toEqual(ArticleView.BIG);
    expect(nextState.limit).toEqual(4);
  });
});
