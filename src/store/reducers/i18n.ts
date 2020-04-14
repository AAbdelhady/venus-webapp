import {I18N as i18nActionTypes} from '../actions/actionTypes';
import {updateObject} from '../../utils/common';
import {Lang, langPrefix} from '../../i18n/lang';

interface State {
    lang: Lang | null;
    langPrefix: string;
}

const initialState: State = {
    lang: null,
    langPrefix: ''
};

const setLanguage = (state: State, action) => updateObject(state, {
    lang: action.lang,
    langPrefix: langPrefix(action.lang)
});

const reducer = (state: State = initialState, action) => {
    switch (action.type) {
        case i18nActionTypes.CHANGE_LANG:
            return setLanguage(state, action);
        default:
            return state;
    }
};

export default reducer;