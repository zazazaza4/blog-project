import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { LoginModal } from 'features/AuthByUsername';

import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';

import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onCloseModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('Blog')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutesPath.article_create}
          theme={AppLinkTheme.INVERTED}
          className={cls.createBtn}
        >
          {t('')}
        </AppLink>
        <Dropdown
          className={cls.dropdown}
          direction="bottom left"
          items={[
            ...(isAdminPanelAvailable ? [{
              content: t('header.admin'),
              href: RoutesPath.admin_panel,
            }] : []),
            {
              content: t('header.profile'),
              href: RoutesPath.profile + authData.id,
            },
            {
              content: t('header.logout'),
              onClick: onLogout,
            },
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />}
        />
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onShowModal}
        className={cls.links}
      >
        {t('header.login')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </header>
  );
});
