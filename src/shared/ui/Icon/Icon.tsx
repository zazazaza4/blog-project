import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  inverted?: boolean;
}

export const Icon: FC<IconProps> = memo((
  {
    className,
    Svg,
    inverted,
  }: IconProps,
) => (
  <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
));
