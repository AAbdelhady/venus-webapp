import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import classes from './RouteNavItem.module.scss';

interface Props {
    link: string;
    children: any;
}

const RouteNavItem = (props: Props) => {
    const langPrefix = useSelector(state => state.i18n.langPrefix);
    const location = useLocation();
    const localizedLink = langPrefix + props.link;
    if (location.pathname && location.pathname === localizedLink) {
        return null;
    }
    return <NavLink to={localizedLink} exact activeClassName={classes.active} className={classes.RouteNavItemLink}>{props.children}</NavLink>;
};

export default RouteNavItem;