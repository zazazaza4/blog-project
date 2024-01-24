import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

const data = {
  id: '1',
  title: 'Javascript News',
  subtitle: "What's New in JS for the Year 2023?",
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [],
  user: {
    id: '1',
    username: 'someone',
  },
  blocks: [],
};

describe('articleDetailsSlice', () => {
  test('test fetching article by id pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
    };

    expect(articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.pending,
    )).toEqual({
      isLoading: true,
    });
  });

  test('test fetching article by id fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };

    expect(articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.fulfilled(data, '', ''),
    )).toEqual({
      isLoading: false,
      data,
    });
  });
});
