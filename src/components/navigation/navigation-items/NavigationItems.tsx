import React from 'react';
import {withRouter} from 'react-router-dom';
import classes from './NavigationItems.module.scss';
import NavigationItem from './navigation-item/NavigationItem';
import {Role, User} from "../../../models/user.model";
import LoggedInAuthNavItem from './logged-in-auth-nav-item/LoggedInAuthNavItem';
import LoggedOutAuthNavItem from './logged-out-auth-nav-item/LoggedOutAuthNavItem';

const authNav = (authorizedUser: User) => {
    return authorizedUser ? <LoggedInAuthNavItem authorizedUser={authorizedUser}/> : <LoggedOutAuthNavItem/>;
};

const artistOnlyNavs = (props) => {
    return (props.authorizedUser?.role === Role.ARTIST) ? [
        prepareNavItem("/dashboard", "Dashboard", props)
    ] : null;
};

const customerOnlyNavs = (props) => {
    return (props.authorizedUser?.role === Role.CUSTOMER) ? [
        prepareNavItem("/search", "Search", props)
    ] : null;
};

const prepareNavItem = (path: string, title: string, props) => {
    const currentPath = props.location.pathname;
    if (currentPath && currentPath === path) {
        return null;
    }
    return <NavigationItem key={path} link={props.langPrefix + path}>{title}</NavigationItem>;
};

const NavigationItems = (props) => {
    return (
            <ul className={classes.NavigationItems}>
                {artistOnlyNavs(props)}
                {customerOnlyNavs(props)}
                {authNav(props.authorizedUser)}
            </ul>
    );
};

export default withRouter(NavigationItems);