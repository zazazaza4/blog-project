import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList } from 'entities/Article';

import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = memo((
  props: ArticleRecommendationsListProps,
) => {
  const { t } = useTranslation();
  const {
    className,
  } = props;
  const { isLoading, data: articles, isError } = useArticleRecommendationsList(3);

  if (isLoading || isError) {
    return null;
  }

  return (
    <VStack gap="8" className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('recommendations')}
      />
      <ArticleList
        articles={articles}
        target="_blank"
      />
    </VStack>
  );
});
