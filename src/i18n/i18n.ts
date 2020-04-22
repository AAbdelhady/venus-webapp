import i18n from "i18next";
import {initReactI18next} from 'react-i18next';
import resources from './resources';
import {DEFAULT_LANG} from './lang';
import ns, {namespaces} from './namespace';

i18n.use(initReactI18next).init({
    resources,
    lng: DEFAULT_LANG,
    fallbackLng: DEFAULT_LANG,
    debug: true,

    // have a common namespace used around the full app
    ns: namespaces(),
    defaultNS: ns.common,

    keySeparator: ".",

    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;