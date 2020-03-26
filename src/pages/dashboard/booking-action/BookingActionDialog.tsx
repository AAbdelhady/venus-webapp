import React from 'react';
import {Booking, BookingStatus} from '../../../models/booking.model';
import NewBookingAction from './NewBookingAction';
import OfferedBookingAction from './OfferedBookingAction';
import Dialog from '../../../hoc/dialog/Dialog';

interface Props {
    show: boolean;
    booking: Booking | null;
    onActionSubmitted();
    onActionDiscarded();
}

const BookingActionDialog = (props: Props) => {
    let bookingActionTitle: string = '';
    let bookingActionContent: React.ReactNode;
    switch (props.booking?.status) {
        case BookingStatus.NEW:
            bookingActionTitle = "You have a new request for appointment";
            bookingActionContent = <NewBookingAction booking={props.booking} onActionSubmitted={props.onActionSubmitted} onActionDiscarded={props.onActionDiscarded}/>;
            break;
        case BookingStatus.OFFERED:
            bookingActionTitle = "Waiting for customer to response for below offered times";
            bookingActionContent = <OfferedBookingAction booking={props.booking}/>;
            break;
    }
    return (
        <Dialog open={props.show} onClose={props.onActionDiscarded} containerClassName="container" title={bookingActionTitle}>
            {bookingActionContent}
        </Dialog>
    );
};

export default BookingActionDialog;