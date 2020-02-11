import axios from '../axios';
import {Pageable} from '../models/pageable.model';
import {pageableQueryParams} from './api.util';

const root = 'artist';

export const registerAsArtist = () => {
    const url = `${root}`;
    return axios.post(url, {});
};

export const fetchArtists = (pageable: Pageable) => {
    const url = `${root}`;
    const queryParams = pageableQueryParams(pageable);
    return axios.get(url, {params: queryParams});
};