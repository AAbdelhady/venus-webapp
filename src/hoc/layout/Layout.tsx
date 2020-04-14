import React, {ReactNode, useCallback, useState} from 'react';
import classes from './Layout.module.scss';
import Toolbar from '../../components/navigation/toolbar/Toolbar';
import SideDrawer from '../../components/navigation/side-drawer/SideDrawer';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import axios from '../../axios';

interface Props {
    children: ReactNode;
}

const Layout = (props: Props) => {
    const [showSideDrawer, setShowSideDrawer] = useState<boolean>(false);
    const sideDrawerOpenedHandler = useCallback(() => setShowSideDrawer(true), [setShowSideDrawer]);
    const sideDrawerClosedHandler = useCallback(() => setShowSideDrawer(false), [setShowSideDrawer]);
    const sideDrawerToggleHandler = useCallback(() => setShowSideDrawer(prevState => !prevState), [setShowSideDrawer]);
    return (
        <>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer
                open={showSideDrawer}
                onOpen={sideDrawerOpenedHandler}
                onClose={sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </>
    )
};

export default withErrorHandler(Layout, axios);