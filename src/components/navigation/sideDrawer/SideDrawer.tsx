import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import logo from '../../../assets/small-logo.png';
import NavigationItems from '../navigationItems/NavigationItems';
import classes from './SideDrawer.module.scss';

const SideDrawer = ( props ) => {
    return (
        <SwipeableDrawer open={props.open} onOpen={props.opened} onClose={props.closed}>
            <div className={classes.Logo}>
                <img src={logo} alt="logo"/>
            </div>
            <nav className={classes.Nav}>
                <NavigationItems authorizedUser={props.authorizedUser}/>
            </nav>
        </SwipeableDrawer>
    );
};

export default SideDrawer;