import {
  FC,
} from 'react';
import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page';

import { EditableProfileCard } from '@/features/editableProfileCard';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';

interface ProfilePageProps {
  className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { id } = useParams<{id: string}>();

  return (
    <Page data-testid="ProfilePage" className={classNames('', {}, [className])}>
      <VStack max gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
