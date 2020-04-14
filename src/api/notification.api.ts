import axios from '../axios';
import {Pageable} from '../models/pageable.model';
import {pageableQueryParams} from './api.util';

const root = 'notification';

export const fetchNotificationsPage = (pageable: Pageable) => {
    const url = `${root}`;
    const queryParams: any = pageableQueryParams(pageable);
    return axios.get(url, {params: queryParams});
};