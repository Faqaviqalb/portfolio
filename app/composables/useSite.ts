import * as en from '~/data/site'
import * as fa from '~/data/site.fa'

// Typed against the English file, so a missing or misnamed field in the
// Farsi file is a type error.
const content: Record<'en' | 'fa', typeof en> = { en, fa }

// The site content (text, projects, UI labels) for the current language.
export function useSite() {
  const { locale } = useI18n()
  return computed(() => content[locale.value as 'en' | 'fa'] ?? en)
}

const faDigits = '۰۱۲۳۴۵۶۷۸۹'

// Shows numbers with Persian digits on the Farsi site.
export function useDigits() {
  const { locale } = useI18n()
  return (value: string | number) =>
    locale.value === 'fa' ? String(value).replace(/\d/g, (d) => faDigits[+d]!) : String(value)
}
