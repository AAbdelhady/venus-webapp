import React, {useState} from 'react';
import NavItem from '../nav-item/NavItem';
import Login from '../../../login/Login';

const LoggedOutAuthNavItem = () => {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <>
            <NavItem key="login" clicked={() => setShowLogin(true)}>Login | Sign up</NavItem>
            <Login show={showLogin} back={() => setShowLogin(false)}/>
        </>
    );
};

export default LoggedOutAuthNavItem;