import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import * as US from './US';
import * as KR from './KR';

export const resources = { US: { ...US }, KR: { ...KR } } as const;

const languageDetector = new LanguageDetector(null, { caches: ['sessionStorage'] });

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'KR',
    debug: process.env.NODE_ENV === 'development',
    keySeparator: '.',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    lng: sessionStorage.getItem('i18nextLng') || 'KR',
  });

export default i18n;
