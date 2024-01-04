import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  to,
  theme = AppLinkTheme.PRIMARY,
  children,
  ...otherProps
}) => (
  <Link
    to={to}
    className={classNames(cls.AppLink, {}, [className, cls[theme]])}
    {...otherProps}
  >
    {children}
  </Link>
);
