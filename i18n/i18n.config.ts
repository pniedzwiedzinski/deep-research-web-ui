import en from '~~/i18n/en.json'
import zh from '~~/i18n/zh.json'
import nl from '~~/i18n/nl.json'
import pl from '~~/i18n/pl.json'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'zh',
  availableLocales: ['en', 'zh', 'nl', 'pl'],
  messages: {
    en,
    zh,
    nl,
    pl,
  },
}))
