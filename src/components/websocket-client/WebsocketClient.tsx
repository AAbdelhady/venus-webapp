import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SockJsClient from 'react-stomp';
import {Notification} from '../../models/notification.model';
import * as actions from '../../store/actions';

const onNotificationReceived = (notification: Notification, dispatch) => {
    const onNotificationClick = () => dispatch(actions.handleNotificationClick(notification));
    dispatch(actions.showSnackbar(notification.title, 'info', onNotificationClick));
    dispatch(actions.showBrowserNotification(notification.title, notification.body, onNotificationClick));
};

const WebsocketClient = () => {
    const dispatch = useDispatch();
    const authorizedUser = useSelector(state => state.auth.user);
    return authorizedUser && (
        <SockJsClient url={`${process.env.REACT_APP_API_BASE_URL}/ws`}
                      topics={['/user/queue/notification']}
                      onMessage={(notification) => onNotificationReceived(notification, dispatch)}/>
    );
}

export default WebsocketClient;