import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import logo from '../../../assets/small-logo.png';
import NavItems from '../nav-items/NavItems';
import classes from './SideDrawer.module.scss';

interface Props {
    open: boolean;
    onOpen();
    onClose();
}

const SideDrawer = (props: Props) => (
    <SwipeableDrawer open={props.open} onOpen={props.onOpen} onClose={props.onClose}>
        <div className={classes.Logo}>
            <img src={logo} alt="logo"/>
        </div>
        <nav className={classes.Nav}>
            <NavItems/>
        </nav>
    </SwipeableDrawer>
);

export default SideDrawer;