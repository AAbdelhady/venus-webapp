import React from 'react';
import {Booking} from '../../../models/booking.model';
import classes from './BookingAction.module.scss';

interface Props {
    booking: Booking | null;
}

const OfferedBookingAction = (props: Props) => {
    return (
        <div className={classes.OfferedBookingActionContainer}>
            {props.booking?.offerings.map(o => <h3>{o.time}</h3>)}
        </div>
    );
};

export default OfferedBookingAction;