import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ukr' ? 'en' : 'ukr');
  };

  return (
    <div className={classNames('', {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={toggle}>
        {t('Lang')}
      </Button>
    </div>
  );
};
