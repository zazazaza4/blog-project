import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
  const { t } = useTranslation('about');

  return <Page>{t('title')}</Page>;
};

export default ForbiddenPage;
