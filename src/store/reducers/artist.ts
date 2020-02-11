import {ARTIST as artistActionTypes} from '../actions/actionTypes';
import {updateObject} from '../../utils/common';
import {Artist} from '../../models/artist.model';
import {Page} from '../../models/page.model';

interface ArtistSearchState {
    artistPage: Page<Artist> | null,
    error: any
}

const initialState: ArtistSearchState = {
    artistPage: null,
    error: null
};

const searchSuccess = (state: ArtistSearchState, action) => {
    return updateObject(state, {
        artistPage: action.artistPage,
        error: null
    });
};

const searchFail = (state: ArtistSearchState, action) => {
    return updateObject(state, {
        artistPage: null,
        error: action.error
    });
};

const reducer = (state: ArtistSearchState = initialState, action) => {
    switch (action.type) {
        case artistActionTypes.SEARCH_SUCCESS:
            return searchSuccess(state, action);
        case artistActionTypes.SEARCH_FAIL:
            return searchFail(state, action);
        default:
            return state;
    }
};

export default reducer;