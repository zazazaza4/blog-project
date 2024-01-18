import {
  FC, memo, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';

import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const sidebarItemList = useSelector(getSidebarItems);

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <Button
        size={ButtonSize.L}
        isSquare
        data-testid="sidebar-toggle"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.collapseBtn}
        onClick={onToggle}
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {sidebarItemList.map((item) => (
          <SidebarItem
            item={item}
            isCollapsed={isCollapsed}
            key={item.path}
          />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher isShort={isCollapsed} className={cls.lang} />
      </div>
    </div>
  );
});
