import React from 'react';
import {useSelector} from 'react-redux';
import classes from './Toolbar.module.scss';
import logo from '../../../assets/small-logo.png';
import NavItems from '../nav-items/NavItems';
import DrawerToggle from '../side-drawer/drawer-toggle/DrawerToggle';
import LangSelector from '../../lang-selector/LangSelector';
import {NavLink} from 'react-router-dom';

interface Props {
    drawerToggleClicked();
}

const Toolbar = (props: Props) => {
    const langPrefix = useSelector(state => state.i18n.langPrefix);
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <NavLink to={langPrefix} exact className={classes.Logo}>
                <img src={logo} alt="logo"/>
            </NavLink>
            <LangSelector/>
            <nav className={classes.DesktopOnly}>
                <NavItems/>
            </nav>
        </header>
    );
};

export default Toolbar;
