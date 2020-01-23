import React, {Component} from "react";
import logo from "../../assets/logo.svg";
import classes from './Home.module.scss';
import {googleLogin} from '../../utils/common';

class HomePage extends Component {
    render() {
        const logoutLink = `${process.env.REACT_APP_API_BASE_URL}/logout`;
        return (
            <div className={classes.App}>
                <header className={classes.AppHeader}>
                    <img src={logo} className={classes.AppLogo} alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a className={classes.AppLink}
                       href="https://reactjs.org"
                       target="_blank"
                       rel="noopener noreferrer"> Learn React</a>
                    <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
                    <small>API base url environment variable value <b>{process.env.REACT_APP_API_BASE_URL}</b></small>
                    <a href="/" onClick={googleLogin}>Google</a>
                    <a href={logoutLink}>Logout</a>
                </header>
            </div>
        );
    }
}

export default HomePage;