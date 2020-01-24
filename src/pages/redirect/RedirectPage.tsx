import React from 'react';
import {Redirect} from 'react-router-dom';
import {loadFromLocalStorage} from '../../utils/localStorage';
import {localStorageKeys} from '../../utils/constants';

const DEFAULT_REDIRECT_URL = '/';

const redirectPage = () => {
    let redirectUrl = loadFromLocalStorage(localStorageKeys.redirect);
    if (!redirectUrl) {
        redirectUrl = DEFAULT_REDIRECT_URL;
    }
    localStorage.removeItem(localStorageKeys.redirect);
    return <Redirect to={redirectUrl}/>;
};

export default redirectPage;