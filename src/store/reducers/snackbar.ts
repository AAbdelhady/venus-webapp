import {SNACKBAR as snackbarActionTypes} from '../actions/actionTypes';
import {Color} from '@material-ui/lab/Alert';

interface State {
    show: boolean;
    text: string;
    severity: Color;
}

interface SnackbarAction {
    type: string;
    text: string;
    severity: Color;
}

const initialState: State = {
    show: false,
    text: '',
    severity: 'info'
};

const showSnackbar = (text: string, severity: Color) => ({
    show: true,
    text: text,
    severity: severity
});

const reducer = (state: State = initialState, action: SnackbarAction) => {
    switch (action.type) {
        case snackbarActionTypes.SHOW_SNACKBAR:
            return showSnackbar(action.text, action.severity);
        case snackbarActionTypes.HIDE_SNACKBAR:
            return initialState;
        default:
            return state;
    }
};

export default reducer;