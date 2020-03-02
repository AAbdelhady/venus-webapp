import {AUTH as authActionTypes} from '../actions/actionTypes';
import {updateObject} from '../../utils/common';
import {User} from "../../models/user.model";

interface State {
    user: User | null;
    loading: boolean;
    error: any;
}

const initialState: State = {
    user: null,
    loading: false,
    error: null
};

const authStart = (state: State, action) => {
    return updateObject(state, {
        loading: true,
        error: null
    });
};

const authSuccess = (state: State, action) => {
    return updateObject(state, {
        user: action.user,
        loading: false,
        error: null
    });
};

const authFail = (state: State, action) => {
    return updateObject(state, {
        user: null,
        loading: false,
        error: action.error
    });
};

const reducer = (state: State = initialState, action) => {
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