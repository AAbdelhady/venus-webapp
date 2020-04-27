import axios from '../axios';
import {Pageable} from '../models/pageable.model';
import {pageableQueryParams} from './api.util';

const root = 'artist';

export const registerAsArtist = (category: string, specialities: SpecialityRequest[]) => {
    const artistRequest: ArtistRequest = {
        category: category,
        specialities: specialities
    }
    return axios.post(root, artistRequest);
};

export const fetchArtists = (pageable: Pageable, category?: string) => {
    let queryParams: any = pageableQueryParams(pageable);
    if (category) {
        queryParams = {...queryParams, category: category};
    }
    return axios.get(root, {params: queryParams});
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
    category: string | null;
    specialities: SpecialityRequest[];
}

export interface SpecialityRequest {
    name: string;
    price: number;
}