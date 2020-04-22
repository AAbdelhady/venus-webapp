import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MuiSnackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import * as actions from '../../../store/actions';

const DEFAULT_TIMEOUT = 3000;

const Snackbar = () => {
    const dispatch = useDispatch();
    const {show, text, severity} = useSelector(state => state.snackbar);
    return (
        <MuiSnackbar open={show} autoHideDuration={DEFAULT_TIMEOUT} onClose={() => dispatch(actions.hideSnackbar())}>
            <Alert severity={severity} variant="filled">
                {text}
            </Alert>
        </MuiSnackbar>
    )
};

export default Snackbar;