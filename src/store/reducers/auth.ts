import {AUTH as authActionTypes} from '../actions/actionTypes';
import {updateObject} from '../../utils/common';
import {User} from "../../models/user.model";

interface AuthState {
    user: User | null,
    error: any
}

const initialState: AuthState = {
    user: null,
    error: null
};

const authStart = (state: AuthState, action) => {
    return updateObject(state, {
        error: null
    });
};

const authSuccess = (state: AuthState, action) => {
    return updateObject(state, {
        user: action.user,
        error: null
    });
};

const authFail = (state: AuthState, action) => {
    return updateObject(state, {
        user: null,
        error: action.error
    });
};

const reducer = (state: AuthState = initialState, action) => {
    switch (action.type) {
        case authActionTypes.START:
            return authStart(state, action);
        case authActionTypes.SUCCESS:
            return authSuccess(state, action);
        case authActionTypes.FAIL:
            return authFail(state, action);
        default:
            return state;
    }
};

export default reducer;