import { FC, Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';

import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';

import { AppLink } from '../AppLink/AppLink';

import cls from './Dropdown.module.scss';

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top right': cls.optionsTopRight,
  'top left': cls.optionsTopLeft,
};

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export const Dropdown: FC<DropdownProps> = (
  props: DropdownProps,
) => {
  const {
    className,
    trigger,
    items,
    direction = 'bottom left',
  } = props;
  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu
      as="div"
      className={classNames(cls.Dropdown, {}, [className])}
    >
      <Menu.Button className={cls.btn}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {
          items.map((item) => {
            const content = ({ active }: {active: boolean}) => (
              <button
                type="button"
                disabled={item.disabled}
                onClick={item.onClick}
                className={classNames(cls.item, {
                  [cls.active]: active,
                })}
              >
                {item.content}
              </button>
            );

            if (item.href) {
              return (
                <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                  {content}
                </Menu.Item>
              );
            }

            return (
              <Menu.Item as={Fragment} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          })
        }

      </Menu.Items>
    </Menu>
  );
};
