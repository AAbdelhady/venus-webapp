import common_en from '../assets/i18n/en/common.json';
import common_et from '../assets/i18n/et/common.json';
import common_ru from '../assets/i18n/ru/common.json';

import register_en from '../assets/i18n/en/register.json';
import register_et from '../assets/i18n/et/register.json';
import register_ru from '../assets/i18n/ru/register.json';

export const supportedLangs = ['en', 'et', 'ru'] as const;
export type Lang = (typeof supportedLangs)[number];

export const DEFAULT_LANG: Lang = 'et';

export const langPrefix = (lang: Lang) => {
    return lang === DEFAULT_LANG ? '' : `/${lang}`;
};

export const en = {
    common: common_en,
    register: register_en
};

export const et = {
    common: common_et,
    register: register_et
};

export const ru = {
    common: common_ru,
    register: register_ru
};


export const isSupportedLang = (lang) => {
    return supportedLangs.includes(lang);
};

export const langParam = (lang: Lang) => {
    return lang === DEFAULT_LANG ? '' : `/${lang}`;
};