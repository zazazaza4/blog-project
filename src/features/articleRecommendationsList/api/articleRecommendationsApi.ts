import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    ArticleRecommendationsList: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const useArticleRecommendationsList = recommendationsApi.useArticleRecommendationsListQuery;
