import {UI as actionTypes} from './actionTypes';

export const showLoadingOverlay = () => {
    return {
        type: actionTypes.SHOW_LOADING
    };
};

export const hideLoadingOverlay = () => {
    return {
        type: actionTypes.HIDE_LOADING
    };
};