import {BROWSER_NOTIFICATION as browserNotificationActionTypes} from './actionTypes';

export const showBrowserNotification = (title: string, body: string, onClick = () => {}) => ({
    type: browserNotificationActionTypes.SHOW_BROWSER_NOTIFICATION,
    title: title,
    body: body,
    onClick: onClick
});

export const resetBrowserNotification = () => ({
    type: browserNotificationActionTypes.RESET_BROWSER_NOTIFICATION,
});