import { FC, memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'app/providers/ThemeProvider';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer: FC<DrawerProps> = memo((
  props: DrawerProps,
) => {
  const { t } = useTranslation();
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;
  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme])}>
        <Overlay onClick={onClose} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
