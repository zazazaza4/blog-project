import {
  ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  isSquare?: boolean;
  isDisabled?: boolean;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = memo(({
  className,
  children,
  theme,
  isSquare,
  isDisabled,
  size = ButtonSize.M,
  ...otherProps
}: ButtonProps) => {
  const mods: Record<string, boolean> = {
    [cls.square]: isSquare,
    [cls.disabled]: isDisabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      disabled={isDisabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
