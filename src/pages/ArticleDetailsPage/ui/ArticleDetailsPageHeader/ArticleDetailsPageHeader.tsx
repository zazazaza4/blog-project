import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from 'entities/Article';

import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';

import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo((
  props: ArticleDetailsPageHeaderProps,
) => {
  const { className } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  const onBackToList = useCallback(() => {
    navigate(RoutesPath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutesPath.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Button onClick={onBackToList}>
        {t('button.backToList')}
      </Button>
      {canEdit && (
        <Button
          onClick={onEditArticle}
        >
          {t('edit')}
        </Button>
      )}
    </HStack>
  );
});
