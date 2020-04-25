import React, {ReactNode} from 'react';
import {useSelector} from 'react-redux';
import classes from './NavItems.module.scss';
import {Role, User} from "../../../models/user.model";
import SkeletonNavItem from '../nav-item/skeleton/SkeletonNavItem';
import RouteNavItem from '../nav-item/route/RouteNavItem';
import NotificationsNavItem from '../nav-item/notification/NotificationsNavItem';
import ProfileMenuNavItem from '../nav-item/profile-menu/ProfileMenuNavItem';
import LoginNavItem from '../nav-item/login/LoginNavItem';

const skeletons = [<SkeletonNavItem/>, <SkeletonNavItem/>, <SkeletonNavItem/>];

const authSpecificNavs = (authorizedUser: User) => authorizedUser
    ? [<NotificationsNavItem/>, <ProfileMenuNavItem user={authorizedUser}/>]
    : [<LoginNavItem/>];

const roleSpecificNavs = (authorizedUser: User) => (authorizedUser?.role === Role.ARTIST)
    ? [<RouteNavItem link="/dashboard">Dashboard</RouteNavItem>]
    : [<RouteNavItem link="/search">Search</RouteNavItem>];

const NavItems = () => {
    const authorizedUser = useSelector(state => state.auth.user);
    const authLoading = useSelector(state => state.auth.loading);
    const items: ReactNode[] = authLoading ? skeletons : [...roleSpecificNavs(authorizedUser), ...authSpecificNavs(authorizedUser)];
    return (
        <ul className={classes.NavigationItems}>
            {items.map((item, idx) => <li key={`nav-item-${idx}`} className={classes.NavigationItem}>{item}</li>)}
        </ul>
    );
};

export default NavItems;