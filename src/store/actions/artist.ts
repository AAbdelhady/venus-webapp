import {ARTIST as artistActionTypes} from './actionTypes';
import {Pageable} from '../../models/pageable.model';
import {fetchArtists} from '../../api/artist.api';
import {Artist} from '../../models/artist.model';
import {Page} from '../../models/page.model';

const searchStart = () => ({
    type: artistActionTypes.SEARCH_START
});

const searchSuccess = (artistPage: Page<Artist>, pageNumber: number) => ({
    type: artistActionTypes.SEARCH_SUCCESS,
    artistPage: artistPage,
    pageNumber: pageNumber
});

const searchFail = (error) => ({
    type: artistActionTypes.SEARCH_FAIL,
    error: error
});

export const searchArtists = (pageable: Pageable, category: string) => {
    return dispatch => {
        dispatch(searchStart());
        fetchArtists(pageable, category)
            .then(response => {
                dispatch(searchSuccess(response.data, pageable.pageNumber));
            })
            .catch(err => {
                dispatch(searchFail(err));
                throw err;
            });
    };
};