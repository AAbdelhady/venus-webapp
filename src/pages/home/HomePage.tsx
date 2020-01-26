import React, {Component} from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import logo from "../../assets/logo.svg";
import classes from './Home.module.scss';
import {googleLogin, facebookLogin} from '../../utils/common';

class HomePage extends Component<any> {
    render() {
        const logoutLink = `${process.env.REACT_APP_API_BASE_URL}/logout`;
        const loginLinks = <h3>Please login <a href="/" onClick={googleLogin}>Google</a> <a href="/" onClick={facebookLogin}>Facebook</a></h3>;
        const authenticatedPersonSection = this.props.authenticatedUser
            ? <h3>Authenticated user is {this.props.authenticatedUser.first_name} {this.props.authenticatedUser.last_name} <a href={logoutLink}>Logout</a></h3>
            : loginLinks;
        return (
            <div className={classes.App}>
                <header className={classes.AppHeader}>
                    {authenticatedPersonSection}
                    <img src={logo} className={classes.AppLogo} alt="logo"/>
                    <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
                    <small>API base url environment variable value <b>{process.env.REACT_APP_API_BASE_URL}</b></small>
                    <Link to="/test">Test Page ></Link>
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        authenticatedUser: state.auth.user
    }
};

export default connect(mapStateToProps)(HomePage);