import {
  FC, memo, Suspense, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { AddCommentForm } from '@/features/AddCommentForm';

import { CommentList } from '@/entities/Comment';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';

import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo((
  props: ArticleDetailsCommentsProps,
) => {
  const { t } = useTranslation();
  const { className, id } = props;
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <VStack max gap="16" className={classNames('', {}, [className])}>
      <Text title={t('comments')} />
      <Suspense fallback={
        <Skeleton width="100%" height={160} />
      }
      >
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          comments={comments}
          isLoading={commentsIsLoading}
        />
      </Suspense>
    </VStack>
  );
});
