import { createI18n } from 'vue-i18n';

import pagesCa from './pages/pagesCa.json';
import pagesEn from './pages/pagesEn.json';
import pagesEs from './pages/pagesEs.json';
import sharedErrorsCa from './sharedErrors/sharedErrorsCa.json';
import sharedErrorsEn from './sharedErrors/sharedErrorsEn.json';
import sharedErrorsEs from './sharedErrors/sharedErrorsEs.json';

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.locale || 'ca',
  fallbackLocale: 'ca',
  messages: {
    en: {
      pages: pagesEn,
      error: sharedErrorsEn,
    },
    ca: {
      pages: pagesCa,
      error: sharedErrorsCa,
    },
    es: {
      pages: pagesEs,
      error: sharedErrorsEs,
    },
  },
});