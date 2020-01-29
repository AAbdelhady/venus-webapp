import React from 'react';

import logo from '../../../assets/small-logo.png';
import NavigationItems from '../navigationItems/NavigationItems';
import classes from './SideDrawer.module.scss';
import Backdrop from '../../ui/backdrop/Backdrop';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <img src={logo} className={classes.Logo} alt="logo"/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;