import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { hasLocale } from 'next-intl';

export default getRequestConfig(async ({ requestLocale }) => {

  let locale =
    requestLocale instanceof Promise
      ? await requestLocale
      : requestLocale;

  if (!hasLocale(routing.locales, locale)) {
    locale = routing.defaultLocale;
  }
  const common = (await import(`@/messages/${locale}/common.json`)).default;
  const countries  = (await import(`@/messages/${locale}/countries/countries.json`)).default;
    
  return {
    locale,
    messages: {
      ...common,
        countries
    }
  };
});
