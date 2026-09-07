import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['fa', 'ar' , 'ru' , 'tr' , 'en'],
    defaultLocale: 'fa',
    localePrefix: 'as-needed',
    localeDetection: false
});


