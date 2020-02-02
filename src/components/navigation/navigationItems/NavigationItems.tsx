import React from 'react';
import {withRouter} from 'react-router-dom';
import classes from './NavigationItems.module.scss';
import NavigationItem from './navigationItem/NavigationItem';
import {User, Role} from "../../../models/user.model";

const authNav = (authorizedUser: User) => {
    return authorizedUser ?
        prepareNavItem("/profile", `${authorizedUser.firstName} ${authorizedUser.lastName}`) :
        <NavigationItem key="login" link="">Login | Sign up</NavigationItem>;
};

const artistOnlyNavs = (props) => {
    return (props.authorizedUser?.role === Role.ARTIST) ? [
        prepareNavItem("/dashboard", "Dashboard", props.location.pathname)
    ] : null;
};

const customerOnlyNavs = (props) => {
    return (props.authorizedUser?.role === Role.CUSTOMER) ? [
        prepareNavItem("/search", "Search", props.location.pathname)
    ] : null;
};

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        {artistOnlyNavs(props)}
        {customerOnlyNavs(props)}
        {authNav(props.authorizedUser)}
    </ul>
);

const prepareNavItem = (path: string, title: string, currentPath?: string) => {
    if (currentPath && currentPath === path) {
        return null;
    }
    return <NavigationItem key={path} link={path}>{title}</NavigationItem>;
};

export default withRouter(navigationItems);