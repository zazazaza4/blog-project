import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
  const { t } = useTranslation('admin');

  return <Page>{t('title')}</Page>;
};

export default AdminPanelPage;
