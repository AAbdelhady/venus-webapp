import {fetchAuthenticatedUser} from '../../api/user.api';
import {AUTH as authActionTypes} from './actionTypes';

export const authStart = () => {
    return {
        type: authActionTypes.START
    };
};

export const authSuccess = (user) => {
    return {
        type: authActionTypes.SUCCESS,
        user: user
    };
};

export const authFail = (error) => {
    return {
        type: authActionTypes.FAIL,
        error: error
    };
};

export const auth = () => {
    return dispatch => {
        dispatch(authStart());
        fetchAuthenticatedUser()
            .then(response => dispatch(authSuccess(response.data)))
            .catch(err => {
                dispatch(authFail(err));
                if (err?.response?.status !== 401) {
                    throw err;
                }
            });
    };
};