import React, {useEffect, useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {fetchMyBookings} from '../../../api/booking.api';
import {Booking} from '../../../models/booking.model';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const bookingList = (bookings: Booking[]) => {
    return bookings.map(b =>
        <ListItem style={{background: 'grey'}}>
            <Row className="w-100">
                <Col xs={3}>
                    <ListItemText primary={b.id}/>
                </Col>
                <Col xs={3}>
                    <ListItemText primary={b.speciality.name}/>
                </Col>
                <Col xs={3}>
                    <ListItemText primary={b.bookingDate}/>
                </Col>
                <Col xs={3}>
                    <ListItemText primary={b.message}/>
                </Col>
            </Row>
        </ListItem>
    )
};

const CustomerProfile = (props) => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetchMyBookings().then(response => setBookings(response.data))
    }, []);
    return (
        <div>
            <h1>Customer Profile</h1>
            {bookingList(bookings)}
        </div>
    )
};

export default CustomerProfile;