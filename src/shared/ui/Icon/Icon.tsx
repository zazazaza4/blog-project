import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const Icon: FC<IconProps> = memo((
  {
    className,
    Svg,
  }: IconProps,
) => (
  <Svg className={classNames(cls.Icon, {}, [className])} />
));
