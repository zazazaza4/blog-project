import { FC, memo, SVGProps } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  inverted?: boolean;
}

export const Icon = memo((
  {
    className,
    Svg,
    inverted,
    ...otherProps
  }: IconProps,
) => (
  <Svg
    className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
    {...otherProps}
  />
));
