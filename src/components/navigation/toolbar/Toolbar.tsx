import React from 'react';

import classes from './Toolbar.module.scss';
import logo from '../../../assets/small-logo.png';
import NavigationItems from '../navigationItems/NavigationItems';
import DrawerToggle from '../sideDrawer/drawerToggle/DrawerToggle';
import LangSelector from '../../lang-selector/LangSelector';
import {User} from '../../../models/user.model';
import {RouteComponentProps} from 'react-router';

interface Props {
    authorizedUser: User;
    activeRoute: RouteComponentProps;

    drawerToggleClicked();
}

const Toolbar = (props: Props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <img src={logo} className={classes.Logo} alt="logo"/>
        <LangSelector activeRoute={props.activeRoute}/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems authorizedUser={props.authorizedUser}/>
        </nav>
    </header>
);

export default Toolbar;
