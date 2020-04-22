import React from 'react';
import {useDispatch} from 'react-redux';
import * as actions from '../../../../store/actions';

const LoginNavItem = () => {
    const dispatch = useDispatch();
    return <span onClick={() => dispatch(actions.openLoginDialog())}>Login | Sign up</span>;
};

export default LoginNavItem;