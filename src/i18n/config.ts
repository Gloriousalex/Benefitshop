import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { LANG } from 'common/static/language';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: LANG.ua,
    supportedLngs: LANG.LangList,
    detection: {
      order: ['queryString', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // load from server
    },
    ns: ['common', 'layout', 'pages', 'metadata'],
    interpolation: {
      escapeValue: false,
    },
  });
