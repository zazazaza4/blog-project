import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ukr',
    debug: __IS_DEV__,
    cleanCode: true,
    nonExplicitSupportedLngs: true,
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'ukr'],
    load: 'languageOnly',
  });

export default i18n;
