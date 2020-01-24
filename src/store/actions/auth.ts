import axios from '../../axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        user: user
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = () => {
    return dispatch => {
        dispatch(authStart());
        const url = '/user/me';
        axios.get(url)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch(err => {
                console.log('error while fetching authorized user');
                throw err;
            });
    };
};