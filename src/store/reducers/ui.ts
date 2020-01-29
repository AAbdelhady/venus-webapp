import {UI as uiActionTypes} from '../actions/actionTypes';
import {updateObject} from '../../utils/common';

interface UserInterfaceState {
    showLoading: boolean;
}

const initialState: UserInterfaceState = {
    showLoading: false
};

const showLoadingOverlay = (state: UserInterfaceState) => {
    return updateObject(state, {showLoading: true});
};

const hideLoadingOverlay = (state: UserInterfaceState) => {
    return updateObject(state, {showLoading: false});
};

const reducer = (state: UserInterfaceState = initialState, action) => {
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