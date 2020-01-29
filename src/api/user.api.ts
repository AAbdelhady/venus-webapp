import axios from '../axios';

const root = 'user';

export const fetchAuthenticatedUser = () => {
    const url = `${root}/me`;
    return axios.get(url);
};