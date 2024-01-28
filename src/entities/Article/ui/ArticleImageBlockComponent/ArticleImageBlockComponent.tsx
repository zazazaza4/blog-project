import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';

import { ArticleImageBlock } from '../../model/types/article';

import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(({
  className,
  block,
}: ArticleImageBlockComponentProps) => (
  <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
    <img src={block.src} alt={block.id} className={cls.img} />
    {block.title && (
      <Text text={block.title} align={TextAlign.CENTER} />
    )}
  </div>
));
