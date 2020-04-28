import {ARTIST as artistActionTypes} from '../actions/actionTypes';
import {updateObject} from '../../utils/object.utils';
import {Artist} from '../../models/artist.model';
import {Page} from '../../models/page.model';

interface State {
    artistList: Array<Artist>;
    currentPageNumber: number;
    totalElements: number;
    error: any;
    loading: boolean;
}

interface SearchSuccessAction {
    artistPage: Page<Artist>;
    pageNumber: number;
}

const initialState: State = {
    artistList: [],
    currentPageNumber: 0,
    totalElements: 0,
    error: null,
    loading: false
};

const searchStart = (state: State) => updateObject(state, {
    loading: true,
    error: null
});

const searchSuccess = (state: State, action: SearchSuccessAction) => {
    const initialList: Array<Artist> = action.pageNumber !== 0 ? state.artistList : [];
    const updatedList = initialList.concat(action.artistPage.content);
    return updateObject(state, {
        artistList: updatedList,
        currentPageNumber: action.pageNumber,
        totalElements: action.artistPage.totalElements,
        loading: false,
        error: null
    });
};

const searchFail = (state: State, action) => updateObject(state, {
    artistList: state.artistList,
    totalElements: 0,
    loading: false,
    error: action.error
});

const reducer = (state: State = initialState, action) => {
    switch (action.type) {
        case artistActionTypes.SEARCH_START:
            return searchStart(state);
        case artistActionTypes.SEARCH_SUCCESS:
            return searchSuccess(state, action);
        case artistActionTypes.SEARCH_FAIL:
            return searchFail(state, action);
        default:
            return state;
    }
};

export default reducer;