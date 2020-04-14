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
    if (location.pathname && location.pathname === (langPrefix + props.link)) {
        return null;
    }
    return <NavLink to={props.link} exact activeClassName={classes.active} className={classes.RouteNavItemLink}>{props.children}</NavLink>;

};

export default RouteNavItem;