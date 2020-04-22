import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Booking, BookingStatus} from '../../../../models/booking.model';
import {Role, User} from '../../../../models/user.model';
import ArtistNewBookingDetails from './artist-new-booking/ArtistNewBookingDetails';
import ArtistOfferedBookingAction from './artist-offered-booking/ArtistOfferedBookingDetails';
import * as actions from '../../../../store/actions';
import CustomerNewBookingDetails from './customer-new-booking/CustomerNewBookingDetails';
import CustomerOfferedBookingDetails from './customer-offered-booking/CustomerOfferedBookingDetails';

interface Props {
    booking: Booking;
    authorizedUser: User;
}

const artistBookingDetails = (booking, onDismiss) => {
    switch (booking?.status) {
        case BookingStatus.NEW:
            return <ArtistNewBookingDetails booking={booking} dismiss={onDismiss}/>;
        case BookingStatus.OFFERED:
            return <ArtistOfferedBookingAction booking={booking}/>;
        default:
            return null;
    }
};

const customerBookingDetails = (booking, onDismiss) => {
    switch (booking?.status) {
        case BookingStatus.NEW:
            return <CustomerNewBookingDetails booking={booking} dismiss={onDismiss}/>;
        case BookingStatus.OFFERED:
            return <CustomerOfferedBookingDetails booking={booking} dismiss={onDismiss}/>;
        default:
            return null;
    }
};

const BookingDetails = (props: Props) => {
    const dispatch = useDispatch();
    const dismiss = useCallback(() => dispatch(actions.closeUserActionDialog()), [dispatch]);
    return props.authorizedUser.role === Role.ARTIST ? artistBookingDetails(props.booking, dismiss) : customerBookingDetails(props.booking, dismiss);
};

export default BookingDetails;