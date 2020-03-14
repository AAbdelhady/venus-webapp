import React, {useState} from 'react';
import NavItem from '../nav-item/NavItem';
import Login from '../../../login/Login';
import Dialog from '../../../../hoc/dialog/Dialog';

const LoggedOutAuthNavItem = () => {
    const [showLogin, setShowLogin] = useState(false);
    const showDialog = () => setShowLogin(true);
    const hideDialog = () => setShowLogin(false);
    return (
        <>
            <NavItem key="login" clicked={showDialog}>Login | Sign up</NavItem>
            <Dialog open={showLogin} onClose={hideDialog}>
                <Login cancel={hideDialog}/>
            </Dialog>
        </>
    );
};

export default LoggedOutAuthNavItem;