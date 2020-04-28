import {I18N as i18nTypes} from './actionTypes';
import {DEFAULT_LANG, isSupportedLang, Lang} from '../../i18n/lang';
import i18n from '../../i18n/i18n';
import axios from '../../axios';
import {matchPath} from 'react-router';

const langChangeAction = (lang: Lang) => ({
    type: i18nTypes.SET_LANG,
    lang: lang
});

const updateAxiosLangQueryParam = (lang) => {
    axios.interceptors.request.use(req => {
        req.params = {...req.params, lang: lang};
        return req;
    });
};

const extractLangFromPath = (pathname: string) => {
    const pathMatch: any = matchPath(pathname, {path: '/:lang'});
    let lang = pathMatch?.params?.lang;
    if (!lang || !isSupportedLang(lang)) {
        lang = DEFAULT_LANG;
    }
    return lang;
};

export const setLanguageFromRoute = (pathname: string) => {
    return dispatch => {
        let lang = extractLangFromPath(pathname);
        updateAxiosLangQueryParam(lang);
        dispatch(langChangeAction(lang));
        i18n.changeLanguage(lang).then(() => console.log(`language extracted from url [${lang}]`));
        return new Promise(resolve => resolve());
    }
};