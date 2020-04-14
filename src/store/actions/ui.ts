import {UI as actionTypes} from './actionTypes';

export const showLoadingOverlay = () => ({
    type: actionTypes.SHOW_LOADING
});

export const hideLoadingOverlay = () => ({
    type: actionTypes.HIDE_LOADING
});