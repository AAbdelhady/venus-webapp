import {saveToLocalStorage} from "./localStorage";
import {localStorageKeys, googleLoginLink} from "./constants";

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const googleLogin = (event: any) => {
    event.preventDefault();
    saveToLocalStorage(localStorageKeys.redirect, window.location.pathname);
    window.location.href = googleLoginLink;
};