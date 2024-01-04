import { useTranslation } from 'react-i18next';

import { BugButton } from 'app/providers/ErrorBoundary';

import { Counter } from 'entities/Counter';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <BugButton />
      {' '}
      {t('title')}
      <Counter />
    </div>
  );
};
export default MainPage;
