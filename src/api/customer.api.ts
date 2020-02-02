import axios from '../axios';

const root = 'customer';

export const registerAsCustomer = () => {
    const url = `${root}`;
    return axios.post(url, {});
};