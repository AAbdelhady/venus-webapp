import {BROWSER_NOTIFICATION as browserNotificationActionTypes} from '../actions/actionTypes';

interface State {
    show: boolean
    title: string;
    body: string;
    onClick: () => void;
}

interface Action {
    type: string;
    title: string;
    body: string;
    onClick: () => void;
}

const initialState: State = {
    show: false,
    title: '',
    body: '',
    onClick: () => {}
};

const showBrowserNotification = (title: string, body: string, onClick: () => void) => ({
    show: true,
    title: title,
    body: body,
    onClick: onClick
});

const reducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case browserNotificationActionTypes.SHOW_BROWSER_NOTIFICATION:
            return showBrowserNotification(action.title, action.body, action.onClick);
        case browserNotificationActionTypes.RESET_BROWSER_NOTIFICATION:
            return initialState;
        default:
            return state;
    }
};

export default reducer;