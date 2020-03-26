import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Booking} from '../../../models/booking.model';

interface Props {
    bookings: Booking[] | undefined;
    onBookingClicked(booking: Booking);
}

const BookingList = (props: Props) => {
    const bookingRow = (booking: Booking) => (
        <Row key={booking.id} onClick={() => props.onBookingClicked(booking)}>
            <Col xs={4}>{booking.speciality.name}</Col>
            <Col xs={4}>{`${booking.customer.firstName} ${booking.customer.lastName}`}</Col>
            <Col xs={4}>{booking.message}</Col>
        </Row>
    );
    const bookingList = props.bookings ? props.bookings.map(bookingRow) : [];
    return <div>{bookingList}</div>;
};

export default BookingList;