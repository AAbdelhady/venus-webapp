import React, {useCallback, useState} from 'react';
import Login from '../../../login/Login';
import Dialog from '../../../../hoc/dialog/Dialog';

const LoginNavItem = () => {
    const [showLogin, setShowLogin] = useState(false);
    const showDialog = useCallback(() => setShowLogin(true), [setShowLogin]);
    const hideDialog = useCallback(() => setShowLogin(false), [setShowLogin]);
    return (
        <>
            <span onClick={showDialog}>Login | Sign up</span>
            <Dialog open={showLogin} onClose={hideDialog}>
                <Login cancel={hideDialog}/>
            </Dialog>
        </>
    );
};

export default LoginNavItem;