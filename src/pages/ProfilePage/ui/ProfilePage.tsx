import { useTranslation } from 'react-i18next';

import { profileReducer } from 'entities/Profile';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      {t('title')}
    </DynamicModuleLoader>
  );
};

export default ProfilePage;