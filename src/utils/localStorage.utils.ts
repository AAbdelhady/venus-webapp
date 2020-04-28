const loadFromLocalStorage = (key: string) => {
    try {
        const serialized = localStorage.getItem(key);
        return serialized ? JSON.parse(serialized) : null;
    } catch (e) {
        console.error(e);
        return null;
    }
};

export const pushToLocalStorage = (key: string, value: any) => {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
};

export const popFromLocalStorage = (key: string) => {
    const value = loadFromLocalStorage(key);
    localStorage.removeItem(key);
    return value;
};