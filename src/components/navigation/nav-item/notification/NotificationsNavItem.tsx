import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../../../store/actions';
import {Pageable} from '../../../../models/pageable.model';
import {Notification} from '../../../../models/notification.model';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NotificationRow from './NotificationRow';

const MENU_ID = "notifications-menu";

const initPageable: Pageable = {
    pageNumber: 0,
    pageSize: 20
};

const notificationMenuItems = (notificationList: Notification[], onNotificationClick) => {
    return notificationList.length > 0
        ? notificationList.map((n, i) => <MenuItem key={i} onClick={() => onNotificationClick(n)}><NotificationRow notification={n}/></MenuItem>)
        : <MenuItem>No notifications!</MenuItem>;
};

const NotificationsNavItem = () => {
    const dispatch = useDispatch();
    const notificationList = useSelector<Notification[]>(state => state.notification.notificationList);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();

    const openNotificationsDropdown = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        dispatch(actions.fetchMyNotifications(initPageable));
    }, [setAnchorEl, dispatch]);

    const closeNotificationsDropdown = useCallback(() => setAnchorEl(null), [setAnchorEl]);

    const onNotificationClick = useCallback((notification) => {
        dispatch(actions.handleNotificationClick(notification));
        closeNotificationsDropdown();
    }, [dispatch, closeNotificationsDropdown]);

    return (
        <>
            <span onClick={openNotificationsDropdown}>Notifications</span>
            <Menu id={MENU_ID} anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={closeNotificationsDropdown}>
                {notificationMenuItems(notificationList, onNotificationClick)}
            </Menu>
        </>
    )
};

export default NotificationsNavItem;