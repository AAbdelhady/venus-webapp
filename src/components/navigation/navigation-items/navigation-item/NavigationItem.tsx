import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './NavigationItem.module.scss';

class Props {
    link?: string;
    exact?: boolean = false;
    children: any;
    clicked?
}

const NavigationItem = (props: Props) => {
    const handleClick = (event) => {
        event.preventDefault();
        props.clicked(event);
    };
    const link = props.link ? <NavLink to={props.link} exact={props.exact} activeClassName={classes.active}>{props.children}</NavLink> : <a href="/" onClick={handleClick}>{props.children}</a>;
    return <li className={classes.NavigationItem}>{link}</li>;
};

export default NavigationItem;