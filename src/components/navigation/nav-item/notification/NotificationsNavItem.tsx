import React, {useCallback, useEffect, useState} from 'react';
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

const notificationMenuItems = (notificationList: Notification[]) => {
    return notificationList.length > 0 ? notificationList.map((n, i) => <MenuItem key={i}><NotificationRow notification={n}/></MenuItem>) : <MenuItem>No notifications!</MenuItem>;
};

const NotificationsNavItem = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(actions.fetchMyNotifications(initPageable)), [dispatch]);
    const notificationList = useSelector<Notification[]>(state => state.notification.notificationList);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openNotificationsDropdown = useCallback((event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget), [setAnchorEl]);
    const closeNotificationsDropdown = useCallback(() => setAnchorEl(null), [setAnchorEl]);
    return (
        <>
            <span onClick={openNotificationsDropdown}>Notifications</span>
            <Menu id={MENU_ID} anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={closeNotificationsDropdown}>
                {notificationMenuItems(notificationList)}
            </Menu>
        </>
    )
};

export default NotificationsNavItem;