import {SNACKBAR as snackbarActionTypes} from './actionTypes';
import {Color} from '@material-ui/lab/Alert';

export const showSnackbar = (text: string, severity: Color = 'info') => ({
    type: snackbarActionTypes.SHOW_SNACKBAR,
    text: text,
    severity: severity
});

export const hideSnackbar = () => ({
    type: snackbarActionTypes.HIDE_SNACKBAR,
});