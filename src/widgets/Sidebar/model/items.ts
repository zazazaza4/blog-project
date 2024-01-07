import React from 'react';

import { RoutesPath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutesPath.main,
    text: 'sidebar.main',
    Icon: MainIcon,
  },
  {
    path: RoutesPath.about,
    text: 'sidebar.about',
    Icon: AboutIcon,
  },
  {
    path: RoutesPath.profile,
    text: 'sidebar.profile',
    Icon: ProfileIcon,
  },
];
