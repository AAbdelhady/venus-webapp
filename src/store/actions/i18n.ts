import {matchPath, RouteComponentProps} from 'react-router';
import {I18N as i18nTypes} from './actionTypes';
import {DEFAULT_LANG, isSupportedLang, Lang, langParam} from '../../i18n/lang';
import i18n from '../../i18n/i18n';
import axios from '../../axios';
import {headerNames} from '../../utils/constants';

export const changeLanguage = (lang: Lang, activeRoute: RouteComponentProps) => {
    updateLangParamInRoute(lang, activeRoute);
    i18n.changeLanguage(lang);
    updateLangHeader(lang);
    return {
        type: i18nTypes.CHANGE_LANG,
        lang: lang
    };
};

export const setLanguageFromRoute = (history: RouteComponentProps) => {
    return dispatch => {
        let lang = extractLangFromPath(history.location.pathname);
        dispatch(changeLanguage(lang, history));
    }
};

const updateLangParamInRoute = (newLang: Lang, activeRoute) => {
    const currentPathname = activeRoute.location.pathname;
    const currentLang = extractLangFromPath(currentPathname);
    if (currentLang === newLang) {
        return;
    }
    const newPathname = currentLang === DEFAULT_LANG ? `${langParam(newLang)}${currentPathname}` : currentPathname.replace(langParam(currentLang), langParam(newLang));
    activeRoute.push(newPathname);
};

const updateLangHeader = (lang) => {
    axios.interceptors.request.use(req => {
            req.headers[headerNames.acceptLanguage] = lang;
            return req;
        }
    );
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