import React from 'react';
import {Booking} from '../../../../../models/booking.model';
import classes from './ArtistOfferedBookingDetails.module.scss';

interface Props {
    booking: Booking | null;
}

const ArtistOfferedBookingAction = (props: Props) => (
    <div className={classes.OfferedBookingActionContainer}>
        {props.booking?.offerings.map(o => <h3 key={o.id}>{o.time}</h3>)}
    </div>
);

export default ArtistOfferedBookingAction;