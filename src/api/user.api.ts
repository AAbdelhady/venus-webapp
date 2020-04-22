import axios from '../axios';

const root = 'user';

export const fetchAuthorizedUser = () => {
    const url = `${root}/me`;
    return axios.get(url);
};