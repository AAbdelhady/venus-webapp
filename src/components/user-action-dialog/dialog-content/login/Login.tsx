import React from 'react';
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import GoogleIcon from '../../../ui/svg-icon/icons/GoogleIcon';
import FacebookIcon from '../../../ui/svg-icon/icons/FacebookIcon';
import classes from './Login.module.scss';
import * as actions from '../../../../store/actions';
import {pushToLocalStorage} from '../../../../utils/localStorage.utils';
import {localStorageKeys, socialLoginLinkPrefix} from '../../../../utils/constants';

const login = (event: any, suffix: string) => {
    event.preventDefault();
    pushToLocalStorage(localStorageKeys.redirect, window.location.pathname);
    window.location.href = socialLoginLinkPrefix + suffix;
};

const Login = () => {
    const dispatch = useDispatch();
    return (
        <div className={classes.Container}>
            <div className={classes.ButtonContainer}>
                <Button variant="contained" startIcon={<GoogleIcon/>} onClick={(event) => login(event, 'google')}>
                    Google
                </Button>
            </div>
            <div className={classes.ButtonContainer}>
                <Button variant="contained" startIcon={<FacebookIcon/>} onClick={(event) => login(event, 'facebook')}>
                    Facebook
                </Button>
            </div>
            <div className={classes.ButtonContainer}>
                <Button href="" color="primary" onClick={() => dispatch(actions.closeUserActionDialog())}>Back</Button>
            </div>
        </div>
    );
}

export default Login;