import {matchPath, RouteComponentProps} from 'react-router';
import {I18N as i18nTypes} from './actionTypes';
import {DEFAULT_LANG, isSupportedLang, Lang, langParam} from '../../i18n/lang';
import i18n from '../../i18n/i18n';
import axios from '../../axios';
import {persistState} from '../../index';

const langChange = (lang: Lang) => ({
    type: i18nTypes.CHANGE_LANG,
    lang: lang
});

const updateLangParamInRoute = (newLang: Lang, activeRoute) => {
    const currentPathname = activeRoute.location.pathname;
    const currentLang = extractLangFromPath(currentPathname);
    if (currentLang === newLang) {
        return;
    }
    const newPathname = currentLang === DEFAULT_LANG ? `${langParam(newLang)}${currentPathname}` : currentPathname.replace(langParam(currentLang), langParam(newLang));
    activeRoute.push(newPathname);
};

const updateAxiosLangQueryParam = (lang) => {
    axios.interceptors.request.use(req => {
        req.params = {...req.params, lang: lang};
        return req;
    });
};

const extractLangFromPath = (pathname) => {
    const pathMatch: any = matchPath(pathname, {
        path: '/:lang'
    });
    let lang = pathMatch?.params?.lang;
    if (!lang || !isSupportedLang(lang)) {
        lang = DEFAULT_LANG;
    }
    return lang;
};

export const changeLanguage = (lang: Lang, history: any) => {
    return dispatch => {
        dispatch(langChange(lang));
        persistState();
        updateLangParamInRoute(lang, history);
        window.location.reload();
    }
};

export const setLanguageFromRoute = (history: RouteComponentProps) => {
    return dispatch => {
        let lang = extractLangFromPath(history.location.pathname);
        dispatch(langChange(lang));
        updateAxiosLangQueryParam(lang);
        i18n.changeLanguage(lang).then(() => console.log(`language extracted from url [${lang}]`));
        return new Promise(resolve => resolve());
    }
};