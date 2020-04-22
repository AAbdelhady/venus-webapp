import React from 'react';
import {Booking} from '../../../../../models/booking.model';

interface Props {
    booking: Booking | null;
    dismiss();
}

const CustomerNewBookingDetails = (props: Props) => {
    return (
        <div>
            <h1>CustomerNewBookingDetails</h1>
            {JSON.stringify(props)}
        </div>
    );
};

export default CustomerNewBookingDetails;