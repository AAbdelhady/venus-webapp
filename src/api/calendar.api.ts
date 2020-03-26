import axios from '../axios';

const root = 'calendar';

export const fetchMyCalendar = () => {
    const url = `${root}`;
    return axios.get(url);
};