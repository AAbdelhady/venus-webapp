import {saveToLocalStorage} from './localStorage';
import {localStorageKeys, socialLoginLinkPrefix} from './constants';

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const googleLogin = (event: any) => {
    login(event, 'google');
};

export const facebookLogin = (event: any) => {
    login(event, 'facebook');
};

const login = (event: any, suffix: string) => {
    event.preventDefault();
    saveToLocalStorage(localStorageKeys.redirect, window.location.pathname);
    window.location.href = socialLoginLinkPrefix + suffix;
};

export const join = (...strings: string[]): string => {
    return strings.join(' ');
};

export const formHasErrors = (formik: any) => {
    return !!Object.keys(formik.errors).length || !formik.dirty;
};

export const random = () => {
    return Math.floor(Math.random() * 1000000);
};