import {NOTIFICATION as notificationActionTypes} from '../actions/actionTypes';
import {updateObject} from '../../utils/common';
import {Page} from '../../models/page.model';

interface State {
    notificationList: Notification[];
    currentPageNumber: number;
    totalElements: number;
    error: any;
}

interface FetchSuccessAction {
    notificationPage: Page<Notification>;
    pageNumber: number;
}

const initialState: State = {
    notificationList: [],
    currentPageNumber: 0,
    totalElements: 0,
    error: null
};


const fetchSuccess = (state: State, action: FetchSuccessAction) => {
    const initialList: Notification[] = action.pageNumber !== 0 ? state.notificationList : [];
    const updatedList = initialList.concat(action.notificationPage.content);
    return updateObject(state, {
        notificationList: updatedList,
        currentPageNumber: action.pageNumber,
        totalElements: action.notificationPage.totalElements,
        error: null
    });
};

const fetchFail = (state: State, action) => updateObject(state, {
    notificationList: state.notificationList,
    totalElements: 0,
    loading: false,
    error: action.error
});

const reducer = (state: State = initialState, action) => {
    switch (action.type) {
        case notificationActionTypes.FETCH_SUCCESS:
            return fetchSuccess(state, action);
        case notificationActionTypes.FETCH_FAIL:
            return fetchFail(state, action);
        default:
            return state;
    }
};

export default reducer;