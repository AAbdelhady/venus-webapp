import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link, RouteComponentProps} from 'react-router-dom';
import SockJsClient from 'react-stomp';
import logo from "../../assets/logo.svg";
import classes from './Home.module.scss';
import {facebookLogin, googleLogin} from '../../utils/common';
import Layout from "../../hoc/layout/Layout";
import {logoutLink} from '../../utils/constants';
import {User} from '../../models/user.model';
import * as actions from '../../store/actions';

interface Props {
    authorizedUser: User;
    history: RouteComponentProps;
    notify();
}

const HomePage = () => {
    const dispatch = useDispatch();
    const authorizedUser = useSelector(state => state.auth.user);
    const dummyNotification = () => {
        dispatch(actions.showBrowserNotification("what up", "some notification", () => alert('yaaay')));
        dispatch(actions.showSnackbar("what up"));
    }
    const loginLinks = (
        <div>
            <h3>Please login </h3>
            <h3><a href="/" onClick={googleLogin}>Google</a> <a href="/" onClick={facebookLogin}>Facebook</a></h3>
        </div>
    );
    const authorizedPersonSection = authorizedUser
        ? <h3>Authorized user is {authorizedUser.firstName} {authorizedUser.lastName} <a href={logoutLink}>Logout</a></h3>
        : loginLinks;
    return (
        <Layout>
            <div className={classes.App}>
                <header className={classes.AppHeader}>
                    {authorizedPersonSection}
                    <img src={logo} className={classes.AppLogo} alt="logo"/>
                    <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
                    <small>API base url environment variable value <b>{process.env.REACT_APP_API_BASE_URL}</b></small>
                    <Link to="/test">Test Page ></Link>
                </header>

                <button onClick={dummyNotification}>
                    Notify Me!
                </button>
            </div>
            <SockJsClient url={`${process.env.REACT_APP_API_BASE_URL}/ws`} topics={['/user/queue/tst']} onMessage={dummyNotification}/>
        </Layout>
    );
}

export default HomePage;