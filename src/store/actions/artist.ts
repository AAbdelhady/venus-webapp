import {ARTIST as artistActionTypes} from './actionTypes';
import {showLoadingOverlay, hideLoadingOverlay} from "./ui";
import {Pageable} from '../../models/pageable.model';
import {fetchArtists} from '../../api/artist.api';
import {Artist} from '../../models/artist.model';
import {Page} from '../../models/page.model';

export const searchSuccess = (artistPage: Page<Artist>) => {
    return {
        type: artistActionTypes.SEARCH_SUCCESS,
        artistPage: artistPage
    };
};

export const searchFail = (error) => {
    return {
        type: artistActionTypes.SEARCH_FAIL,
        error: error
    };
};

export const searchArtists = (pageable: Pageable) => {
    return dispatch => {
        dispatch(showLoadingOverlay());
        fetchArtists(pageable)
            .then(response => dispatch(searchSuccess(response.data)))
            .catch(err => {
                dispatch(searchFail(err));
                throw err;
            })
            .finally(() => dispatch(hideLoadingOverlay()));
    };
};