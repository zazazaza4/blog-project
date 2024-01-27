import { Rating } from '@/entities/Rating';

import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingArg {
    userId: string;
    articleId: string;
}

interface RateArticleArg {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleRatingArg>({
      query: ({ articleId, userId }) => ({
        url: '/article-rating',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<Rating[], RateArticleArg>({
      query: (arg) => ({
        url: '/article-rating',
        body: arg,
        method: 'POST',
      }),
    }),
  }),
});

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
