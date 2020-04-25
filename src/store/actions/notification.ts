import {NOTIFICATION as notificationActionTypes} from './actionTypes';
import {Pageable} from '../../models/pageable.model';
import {Notification, NotificationType} from '../../models/notification.model';
import {Page} from '../../models/page.model';
import {fetchNotificationsPage} from '../../api/notification.api';
import * as actions from './index';

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

export const handleNotificationClick = (notification: Notification) => {
    return dispatch => {
        switch (notification.type) {
            case NotificationType.BOOKING_OFFERING:
            case NotificationType.BOOKING_REQUEST:
                if (notification.booking) {
                    dispatch(actions.openBookingDialog(notification.booking))
                }
                break;
            case NotificationType.APPOINTMENT_CONFIRMED:
                if (notification.appointment) {
                    dispatch(actions.openAppointmentDialog(notification.appointment))
                }
                break;
        }
    };
}