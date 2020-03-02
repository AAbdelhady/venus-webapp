import React from 'react';
import {withRouter} from 'react-router-dom';
import classes from './NavItems.module.scss';
import NavItem from './nav-item/NavItem';
import {Role, User} from "../../../models/user.model";
import LoggedInAuthNavItem from './logged-in-auth-nav-item/LoggedInAuthNavItem';
import LoggedOutAuthNavItem from './logged-out-auth-nav-item/LoggedOutAuthNavItem';
import NavItemsSkeleton from './NavItemsSkeleton';

const authNav = (authorizedUser: User) => {
    return authorizedUser ? <LoggedInAuthNavItem key="loggedIn" authorizedUser={authorizedUser}/> : <LoggedOutAuthNavItem key="loggedOut"/>;
};

const roleSpecificNavs = (props) => {
    return (props.authorizedUser?.role === Role.ARTIST) ?
        [
            prepareNavItem("/dashboard", "Dashboard", props)
        ] :
        [
            prepareNavItem("/search", "Search", props)
        ];
};

const prepareNavItem = (path: string, title: string, props) => {
    const currentPath = props.location.pathname;
    if (currentPath && currentPath === path) {
        return null;
    }
    return <NavItem key={path} link={props.langPrefix + path}>{title}</NavItem>;
};

const NavItems = (props) => {
    const content = props.authLoading ? <NavItemsSkeleton/> : roleSpecificNavs(props).concat(authNav(props.authorizedUser));
    return (
        <ul className={classes.NavigationItems}>
            {content}
        </ul>
    );
};

export default withRouter(NavItems);