import i18n from 'i18n-js';

import * as RNLocalize from 'react-native-localize';

import en from './locales/en.json';
import pt from './locales/pt.json';

try {
  const language = RNLocalize.getLocales()[0].languageCode;
  i18n.locale = language || 'en';
} catch (error) {
  console.log('ops! An error happening!');
  i18n.locale = 'en';
} finally {
  i18n.defaultLocale = 'en';
  i18n.fallbacks = true;
  i18n.translations = {en, pt};
}

export default i18n;
