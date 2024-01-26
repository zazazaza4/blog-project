import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack';

import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

import cls from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

export const NotificationList: FC<NotificationListProps> = memo((
  props: NotificationListProps,
) => {
  const { className } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VStack max gap="16" className={classNames(cls.NotificationList, {}, [className])}>
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack max gap="16" className={classNames(cls.NotificationList, {}, [className])}>
      {data?.map((item) => (
        <NotificationItem item={item} key={item.id} />
      ))}
    </VStack>
  );
});
