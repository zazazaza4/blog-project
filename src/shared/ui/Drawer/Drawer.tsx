import { FC, memo, ReactNode } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  isLazy?: boolean;
}

export const Drawer: FC<DrawerProps> = memo((
  props: DrawerProps,
) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    isLazy,
  } = props;

  const { isClosing, close, isMounted } = useModal({
    animationDelay: 300,
    isOpen,
    onClose,
  });

  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (isLazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme])}>
        <Overlay onClick={close} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
