import {fetchAuthorizedUser} from '../../api/user.api';
import {AUTH as authActionTypes} from './actionTypes';
import {Role, User} from '../../models/user.model';
import {openRegisterDialog} from './userActionDialog';

const authStart = () => ({
    type: authActionTypes.START
});

const authSuccess = (user: User) => ({
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
        fetchAuthorizedUser()
            .then(response => {
                const user: User = response.data;
                dispatch(authSuccess(user));
                if (user.role === Role.UNSPECIFIED) {
                    dispatch(openRegisterDialog());
                }
            })
            .catch(err => {
                dispatch(authFail(err));
                if (err?.response?.status !== 401) {
                    throw err;
                }
            });
    };
};