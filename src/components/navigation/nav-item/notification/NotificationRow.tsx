import React from 'react';
import {Notification} from '../../../../models/notification.model';
import classes from './NotificationRow.module.scss';

interface Props {
    notification: Notification;
}

const NotificationRow = (props: Props) => {
    return (
        <div className={classes.NotificationRow}>
            <p>{props.notification.title}</p>
            <small>{props.notification.body}</small>
        </div>
    )
};

export default NotificationRow;