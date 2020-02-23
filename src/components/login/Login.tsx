import Dialog from '../../hoc/dialog/Dialog';
import React from 'react';
import {facebookLogin, googleLogin} from '../../utils/common';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {Facebook} from '@material-ui/icons';
import googleLogo from "../../assets/img/google-logo.svg";
import classes from './Login.module.scss';

interface Props {
    show: boolean

    back();
}

const Login = (props: Props) => {
    const googleIcon = (
        <Icon>
            <img src={googleLogo} alt=""/>
        </Icon>
    );
    return (
        <Dialog open={props.show} onClose={props.back}>
            <div className={classes.Container}>
                <div className={classes.ButtonContainer}>
                    <Button variant="contained" startIcon={googleIcon} onClick={googleLogin}>
                        Google
                    </Button>
                </div>
                <div className={classes.ButtonContainer}>
                    <Button variant="contained" startIcon={<Facebook className={classes.FacebookLogo}/>} onClick={facebookLogin}>
                        Facebook
                    </Button>
                </div>
                <div className={classes.ButtonContainer}>
                    <Button href="" color="primary" onClick={props.back}>Back</Button>
                </div>
            </div>
        </Dialog>
    );
};

export default Login;