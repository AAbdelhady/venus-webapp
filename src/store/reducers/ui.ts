import {UI as uiActionTypes} from '../actions/actionTypes';
import {updateObject} from '../../utils/object.utils';

interface State {
    showLoading: boolean;
}

const initialState: State = {
    showLoading: false
};

const showLoadingOverlay = (state: State) => updateObject(state, {showLoading: true});

const hideLoadingOverlay = (state: State) => updateObject(state, {showLoading: false});


const reducer = (state: State = initialState, action) => {
    switch (action.type) {
        case uiActionTypes.SHOW_LOADING:
            return showLoadingOverlay(state);
        case uiActionTypes.HIDE_LOADING:
            return hideLoadingOverlay(state);
        default:
            return state;
    }
};

export default reducer;