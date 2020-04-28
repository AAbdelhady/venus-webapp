import {I18N as i18nActionTypes} from '../actions/actionTypes';
import {updateObject} from '../../utils/object.utils';
import {Lang, langParam} from '../../i18n/lang';

interface State {
    lang: Lang | null;
    langPrefix: string;
}

const initialState: State = {
    lang: null,
    langPrefix: ''
};

const setLanguage = (state: State, lang: Lang) => updateObject(state, {
    lang: lang,
    langPrefix: langParam(lang)
});

const reducer = (state: State = initialState, action) => {
    switch (action.type) {
        case i18nActionTypes.SET_LANG:
            return setLanguage(state, action.lang);
        default:
            return state;
    }
};

export default reducer;