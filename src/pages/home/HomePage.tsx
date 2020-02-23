import React, {Component} from "react";
import {connect} from 'react-redux';
import {Link, RouteComponentProps} from 'react-router-dom';
import logo from "../../assets/logo.svg";
import classes from './Home.module.scss';
import {facebookLogin, googleLogin} from '../../utils/common';
import Layout from "../../hoc/layout/Layout";
import {logoutLink} from '../../utils/constants';
import Notifier from '../../components/notifier/Notifier';
import {Subject} from 'rxjs';
import {User} from '../../models/user.model';

interface Props {
    authorizedUser: User;
    history: RouteComponentProps;
}

class HomePage extends Component<Props> {

    notifierSubject = new Subject();

    render() {
        const loginLinks = (
            <div>
                <h3>Please login </h3>
                <h3><a href="/" onClick={googleLogin}>Google</a> <a href="/" onClick={facebookLogin}>Facebook</a></h3>
            </div>
        );
        const authenticatedPersonSection = this.props.authorizedUser
            ? <h3>Authenticated user is {this.props.authorizedUser.firstName} {this.props.authorizedUser.lastName} <a href={logoutLink}>Logout</a></h3>
            : loginLinks;
        return (
            <Layout activeRoute={this.props.history}>
                <div className={classes.App}>
                    <header className={classes.AppHeader}>
                        {authenticatedPersonSection}
                        <img src={logo} className={classes.AppLogo} alt="logo"/>
                        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
                        <small>API base url environment variable value <b>{process.env.REACT_APP_API_BASE_URL}</b></small>
                        <Link to="/test">Test Page ></Link>
                    </header>
                    <Notifier title="Venus Notification ;)" showSubject={this.notifierSubject}/>

                    <button onClick={() => this.notifierSubject.next()}>
                        Notify Me!
                    </button>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        authenticatedUser: state.auth.user
    }
};

export default connect(mapStateToProps)(HomePage);