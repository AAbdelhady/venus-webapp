import {I18N as i18nActionTypes} from '../actions/actionTypes';
import {updateObject} from '../../utils/common';
import {DEFAULT_LANG, Lang, langPrefix} from '../../i18n/lang';

interface State {
    lang: Lang,
    langPrefix: string
}

const initialState: State = {
    lang: DEFAULT_LANG,
    langPrefix: ''
};

const changeLanguage = (state: State, action) => {
    return updateObject(state, {
        lang: action.lang,
        langPrefix: langPrefix(action.lang)
    });
};

const reducer = (state: State = initialState, action) => {
    switch (action.type) {
        case i18nActionTypes.CHANGE_LANG:
            return changeLanguage(state, action);
        default:
            return state;
    }
};

export default reducer;