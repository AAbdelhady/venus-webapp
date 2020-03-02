import axios from '../axios';
import {Pageable} from '../models/pageable.model';
import {pageableQueryParams} from './api.util';

const root = 'artist';

export const registerAsArtist = (artistRequest: ArtistRequest) => {
    const url = `${root}`;
    return axios.post(url, artistRequest);
};

export const fetchArtists = (pageable: Pageable, category?: string) => {
    const url = `${root}`;
    let queryParams: any = pageableQueryParams(pageable);
    if (category) {
        queryParams = {...queryParams, category: category};
    }
    return axios.get(url, {params: queryParams});
};

export const fetchArtistById = (id: number) => {
    const url = `${root}/${id}`;
    return axios.get(url);
};

export const fetchArtistCategories = () => {
    const url = `${root}/category`;
    return axios.get(url);
};

export interface ArtistRequest {
    category: string | null,
    specialities: []
}