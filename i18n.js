import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import en from './translations/en.json';
import tr from './translations/tr.json';

const resources = {
  en: { translation: en },
  tr: { translation: tr }
};

const LANGUAGE_KEY = 'selectedLanguage';

const detectLanguage = async () => {
  let lang = await AsyncStorage.getItem(LANGUAGE_KEY);
  if (!lang) {
    const deviceLang = Localization.getLocales()[0].languageCode;
    lang = ['en', 'tr'].includes(deviceLang) ? deviceLang : 'en';
    await AsyncStorage.setItem(LANGUAGE_KEY, lang);
  }
  return lang;
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Varsayılan
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    compatibilityJSON: 'v3', // React Native için
  });

export default i18n;

export const initLanguage = async () => {
  const lang = await detectLanguage();
  i18n.changeLanguage(lang);
};