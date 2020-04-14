import {localStorageKeys} from './constants';

export const saveToLocalStorage = (key: string, value: any) => {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
};

export const loadFromLocalStorage = (key: string) => {
    try {
        const serialized = localStorage.getItem(key);
        if (serialized === null) {
            return undefined;
        }
        return JSON.parse(serialized);
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

export const popFromLocalStorage = (key: string) => {
    const value = loadFromLocalStorage(key);
    localStorage.removeItem(key);
    return value;
};

export const pushStateToLocalStorage = (state) => saveToLocalStorage(localStorageKeys.state, state);

export const popStateFromLocalStorage = () => popFromLocalStorage(localStorageKeys.state);