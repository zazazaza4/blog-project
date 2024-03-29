import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
  isShort?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({
  className,
  isShort,
}: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ukr' ? 'en' : 'ukr');
  };

  return (
    <div className={classNames('', {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={toggle}>
        {t(isShort ? 'lang.short' : 'lang.long')}
      </Button>
    </div>
  );
});
