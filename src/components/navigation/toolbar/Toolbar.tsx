import React from 'react';

import classes from './Toolbar.module.scss';
import logo from '../../../assets/small-logo.png';
import NavigationItems from '../navigationItems/NavigationItems';
import DrawerToggle from '../sideDrawer/drawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <img src={logo} className={classes.Logo} alt="logo"/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
