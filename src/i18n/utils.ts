// src/i18n/utils.ts
import es from './es';
import en from './en';
import pt from './pt';

export const languages = { es, en, pt };
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return languages[lang];
}