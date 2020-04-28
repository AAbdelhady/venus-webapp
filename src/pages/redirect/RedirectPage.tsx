import React from 'react';
import {Redirect} from 'react-router-dom';
import {popFromLocalStorage} from '../../utils/localStorage.utils';
import {localStorageKeys} from '../../utils/constants';

const DEFAULT_REDIRECT_URL = '/';

const redirectPage = () => {
    let redirectUrl = popFromLocalStorage(localStorageKeys.redirect);
    if (!redirectUrl) {
        redirectUrl = DEFAULT_REDIRECT_URL;
    }
    localStorage.removeItem(localStorageKeys.redirect);
    return <Redirect to={redirectUrl}/>;
};

export default redirectPage;