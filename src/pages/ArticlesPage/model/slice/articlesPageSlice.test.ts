import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { ArticlesPageActions, ArticlesPageReducer } from './articlesPageSlice';

describe('ArticlesPageSlice', () => {
  test('test', () => {
    const state: DeepPartial<ArticlesPageSchema> = { };
    expect(ArticlesPageReducer(state as ArticlesPageSchema, ArticlesPageActions.setText('1'))).toEqual('1');
  });
});
