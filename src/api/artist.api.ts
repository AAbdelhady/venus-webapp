import axios from '../axios';
import {Pageable} from '../models/pageable.model';
import {pageableQueryParams} from './api.util';

const root = 'artist';

export const registerAsArtist = (artistRequest: ArtistRequest) => {
    const url = `${root}`;
    return axios.post(url, artistRequest);
};

export const fetchArtists = (pageable: Pageable) => {
    const url = `${root}`;
    const queryParams = pageableQueryParams(pageable);
    return axios.get(url, {params: queryParams});
};

export const fetchArtistCategories = () => {
    const url = `${root}/category`;
    return axios.get(url);
};

export interface ArtistRequest {
    category: string | null,
    specialities: []
}