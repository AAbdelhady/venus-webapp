import common_en from '../assets/i18n/en/common.json';
import common_et from '../assets/i18n/et/common.json';
import common_ru from '../assets/i18n/ru/common.json';

import register_en from '../assets/i18n/en/register.json';
import register_et from '../assets/i18n/et/register.json';
import register_ru from '../assets/i18n/ru/register.json';

import booking_en from '../assets/i18n/en/booking.json';
import booking_et from '../assets/i18n/et/booking.json';
import booking_ru from '../assets/i18n/ru/booking.json';

export const supportedLangs = ['en', 'et', 'ru'] as const;
export type Lang = (typeof supportedLangs)[number];

export const DEFAULT_LANG: Lang = 'et';

export const en = {
    common: common_en,
    register: register_en,
    booking: booking_en
};

export const et = {
    common: common_et,
    register: register_et,
    booking: booking_et
};

export const ru = {
    common: common_ru,
    register: register_ru,
    booking: booking_ru
};


export const langParam = (lang: Lang) => lang === DEFAULT_LANG ? '' : `/${lang}`;

export const isSupportedLang = (lang) => supportedLangs.includes(lang);