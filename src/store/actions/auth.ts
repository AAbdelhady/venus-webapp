import {fetchAuthenticatedUser} from '../../api/user.api';
import {AUTH as authActionTypes} from './actionTypes';

const authStart = () => ({
    type: authActionTypes.START
});

const authSuccess = (user) => ({
    type: authActionTypes.SUCCESS,
    user: user
});

const authFail = (error) => ({
    type: authActionTypes.FAIL,
    error: error
});

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