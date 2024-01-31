import {
  CSSProperties, FC, memo, useMemo,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import UserIcon from '@/shared/assets/icons/user-filled.svg';

import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
  fallbackInverted?: boolean;
}

export const Avatar: FC<AvatarProps> = memo(({
  className,
  src,
  alt,
  size = 100,
  fallbackInverted = false,
}: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = <Icon inverted={fallbackInverted} Svg={UserIcon} width={size} height={size} />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
});
