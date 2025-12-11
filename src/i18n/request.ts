
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { hasLocale } from 'next-intl';



export default getRequestConfig(async ({ requestLocale }) => {

  let locale = await requestLocale;
  if (!hasLocale(routing.locales , locale)) locale = routing.defaultLocale;

   const common = (await import(`@/messages/${locale}/common.json`)).default;
  const turkey = (await import(`@/messages/${locale}/countries/turkey.json`)).default;
  const malaysia = (await import(`@/messages/${locale}/countries/malaysia.json`)).default;

  return {
    locale,
    messages: {
      ...common,
      countries: {
        turkey,
        malaysia
      }
    }
  };
});
