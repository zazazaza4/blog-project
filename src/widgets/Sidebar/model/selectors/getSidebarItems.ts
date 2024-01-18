import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from 'entities/User';

import { RoutesPath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ArticleItem from 'shared/assets/icons/article-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemList: SidebarItemType[] = [
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

    ];

    if (userData) {
      sidebarItemList.push(
        {
          path: RoutesPath.profile + userData.id,
          text: 'sidebar.profile',
          Icon: ProfileIcon,
          authOnly: true,
        },
        {
          path: RoutesPath.articles,
          text: 'sidebar.articles',
          Icon: ArticleItem,
          authOnly: true,
        },
      );
    }

    return sidebarItemList;
  },
);
