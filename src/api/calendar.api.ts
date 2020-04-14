import axios from '../axios';

const root = 'calendar';

export const fetchMyCalendar = () => axios.get(root);