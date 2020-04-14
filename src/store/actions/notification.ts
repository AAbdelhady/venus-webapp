import {NOTIFICATION as notificationActionTypes} from './actionTypes';
import {Pageable} from '../../models/pageable.model';
import {Notification} from '../../models/notification.model';
import {Page} from '../../models/page.model';
import {fetchNotificationsPage} from '../../api/notification.api';

const fetchNotificationsSuccess = (notificationPage: Page<Notification>, pageNumber: number) => ({
    type: notificationActionTypes.FETCH_SUCCESS,
    notificationPage: notificationPage,
    pageNumber: pageNumber
});

const fetchNotificationsFail = (error) => ({
    type: notificationActionTypes.FETCH_FAIL,
    error: error
});

export const fetchMyNotifications = (pageable: Pageable) => {
    return dispatch => {
        fetchNotificationsPage(pageable)
            .then(response => {
                dispatch(fetchNotificationsSuccess(response.data, pageable.pageNumber));
            })
            .catch(err => {
                dispatch(fetchNotificationsFail(err));
                throw err;
            });
    };
};