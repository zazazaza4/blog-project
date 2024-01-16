import {
  FC, memo, useCallback,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import CopyIcon from 'shared/assets/icons/copy-20-20.svg';

import cls from './Code.module.scss';

interface CodeProps {
  className?: string
  text: string;
}

export const Code: FC<CodeProps> = memo((
  {
    className,
    text,
  }: CodeProps,
) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre>
      <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code className={classNames(cls.Code, {}, [className])}>
        {text}
      </code>
    </pre>
  );
});
