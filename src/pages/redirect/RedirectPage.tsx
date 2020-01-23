import React from 'react';
import {Redirect} from 'react-router-dom';
import {loadFromLocalStorage} from '../../utils/localStorage';
import {localStorageKeys} from '../../utils/constants';

const redirectPage = () => {
    const redirectUrl = loadFromLocalStorage(localStorageKeys.redirect);
    return <Redirect to={redirectUrl}/>;
}

export default redirectPage;