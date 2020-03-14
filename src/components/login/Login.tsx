import React from 'react';
import Button from '@material-ui/core/Button';
import GoogleIcon from '../ui/svg-icon/icons/GoogleIcon';
import FacebookIcon from '../ui/svg-icon/icons/FacebookIcon';
import {facebookLogin, googleLogin} from '../../utils/common';
import classes from './Login.module.scss';

interface Props {
    cancel();
}

const Login = (props: Props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.ButtonContainer}>
                <Button variant="contained" startIcon={<GoogleIcon/>} onClick={googleLogin}>
                    Google
                </Button>
            </div>
            <div className={classes.ButtonContainer}>
                <Button variant="contained" startIcon={<FacebookIcon/>} onClick={facebookLogin}>
                    Facebook
                </Button>
            </div>
            <div className={classes.ButtonContainer}>
                <Button href="" color="primary" onClick={props.cancel}>Back</Button>
            </div>
        </div>
    );
};

export default Login;