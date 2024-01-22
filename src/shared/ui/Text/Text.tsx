import { FC, memo } from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

export enum TextSize {
  M = 'size_m',
  S = 'size_s',
  L = 'size_l',
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

interface TextProps {
  className?: string
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?:TextSize;
}

export const Text: FC<TextProps> = memo(({
  className,
  text = '',
  title = '',
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  size = TextSize.M,
}: TextProps) => {
  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
