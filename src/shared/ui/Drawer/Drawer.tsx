import {
  FC, memo, ReactNode, useCallback, useEffect,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAnimationLibs } from 'shared/lib/components/AnimationProvider';

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

const height = window.innerHeight - 100;

export const DrawerContent: FC<DrawerProps> = memo((
  props: DrawerProps,
) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    isLazy,
  } = props;

  const { Gesture, Spring } = useAnimationLibs();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({
      y: 0,
      immediate: false,
    });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const closeDrawer = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last, velocity: [, vy], direction: [, dy], movement: [, my], cancel, canceled,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          closeDrawer();
        } else {
          openDrawer();
        }
      } else {
        api.start({
          y: my,
          immediate: true,
        });
      }
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    },
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  return (
    <Portal>
      <div className={classNames(cls.Drawer, {}, [className])}>
        <Overlay onClick={closeDrawer} />
        <Spring.a.div
          className={cls.sheet}
          {...bind()}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}

        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

export const Drawer: FC<DrawerProps> = memo((props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
});
