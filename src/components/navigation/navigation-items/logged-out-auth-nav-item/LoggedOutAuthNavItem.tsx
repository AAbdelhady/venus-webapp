import React, {useState} from 'react';
import NavigationItem from '../navigation-item/NavigationItem';
import Login from '../../../login/Login';

const LoggedOutAuthNavItem = () => {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <>
            <NavigationItem key="login" clicked={() => setShowLogin(true)}>Login | Sign up</NavigationItem>
            <Login show={showLogin} back={() => setShowLogin(false)}/>
        </>
    );
};

export default LoggedOutAuthNavItem;