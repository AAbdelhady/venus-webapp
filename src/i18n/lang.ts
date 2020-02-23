import common_en from '../assets/i18n/en/common.json';
import common_ee from '../assets/i18n/ee/common.json';
import common_ru from '../assets/i18n/ru/common.json';

import register_en from '../assets/i18n/en/register.json';
import register_ee from '../assets/i18n/ee/register.json';
import register_ru from '../assets/i18n/ru/register.json';

export const supportedLangs = ['en', 'ee', 'ru'] as const;
export type Lang = (typeof supportedLangs)[number];

export const DEFAULT_LANG: Lang = 'ee';

export const en = {
    common: common_en,
    register: register_en
};

export const ee = {
    common: common_ee,
    register: register_ee
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