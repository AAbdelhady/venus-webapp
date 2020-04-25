import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MuiSnackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import * as actions from '../../../store/actions';
import classes from './Snackbar.module.scss';

const DEFAULT_TIMEOUT = 3000;

const handleClick = (dispatch, callback) => {
    callback();
    dispatch(actions.hideSnackbar());
}

const Snackbar = () => {
    const dispatch = useDispatch();
    const {show, text, severity, onClick} = useSelector(state => state.snackbar);
    return (
        <MuiSnackbar open={show} autoHideDuration={DEFAULT_TIMEOUT} onClose={() => dispatch(actions.hideSnackbar())}>
            <span onClick={() => handleClick(dispatch, onClick)} className={classes.Content}>
                <Alert severity={severity} variant="filled">
                    {text}
                </Alert>
            </span>
        </MuiSnackbar>
    )
};

export default Snackbar;