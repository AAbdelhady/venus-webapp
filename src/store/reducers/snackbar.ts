import {SNACKBAR as snackbarActionTypes} from '../actions/actionTypes';
import {Color} from '@material-ui/lab/Alert';

interface State {
    show: boolean;
    text: string;
    severity: Color;
    onClick: () => void;
}

interface Action {
    type: string;
    text: string;
    severity: Color;
    onClick: () => void;
}

const initialState: State = {
    show: false,
    text: '',
    severity: 'info',
    onClick: () => {}
};

const showSnackbar = (text: string, severity: Color, onClick: () => void) => ({
    show: true,
    text: text,
    severity: severity,
    onClick: onClick
});

const reducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case snackbarActionTypes.SHOW_SNACKBAR:
            return showSnackbar(action.text, action.severity, action.onClick);
        case snackbarActionTypes.HIDE_SNACKBAR:
            return initialState;
        default:
            return state;
    }
};

export default reducer;