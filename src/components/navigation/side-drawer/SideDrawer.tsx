import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import logo from '../../../assets/small-logo.png';
import NavItems from '../nav-items/NavItems';
import classes from './SideDrawer.module.scss';

const SideDrawer = ( props ) => {
    return (
        <SwipeableDrawer open={props.open} onOpen={props.opened} onClose={props.closed}>
            <div className={classes.Logo}>
                <img src={logo} alt="logo"/>
            </div>
            <nav className={classes.Nav}>
                <NavItems authorizedUser={props.authorizedUser}/>
            </nav>
        </SwipeableDrawer>
    );
};

export default SideDrawer;