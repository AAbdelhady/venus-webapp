export const localStorageKeys = {
    redirect: 'redirectUrl',
    state: 'state'
};

export const socialLoginLinkPrefix = `${process.env.REACT_APP_API_BASE_URL}/oauth2/authorization/`;

export const logoutLink = `${process.env.REACT_APP_API_BASE_URL}/logout`;