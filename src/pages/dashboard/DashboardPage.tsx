import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from 'react-redux';
import Layout from "../../hoc/layout/Layout";
import Tabs from '../../components/ui/tabs/Tabs';
import ArtistCalendar from './artist-calendar/ArtisrtCalendar';
import {Container} from 'react-bootstrap';
import {UserCalendar} from '../../models/calendar.model';
import {fetchMyCalendar} from '../../api/calendar.api';
import BookingList from './booking-list/BookingList';
import {Booking} from '../../models/booking.model';
import {Appointment} from '../../models/appointment.model';
import {onUserActionSubmitted} from '../../store/actions/userActionDialog';
import * as actions from '../../store/actions';

const labels = ['Calendar', 'Bookings', 'Appointments'];

const DashboardPage = () => {
    const dispatch = useDispatch();
    const [currentTabIndex, setTabIndex] = useState<number>(0);
    const [calendar, setCalendar] = useState<UserCalendar | null>(null);
    const refreshCalendar = useCallback(() => {
        fetchMyCalendar().then(response => setCalendar(response.data))
    }, []);
    const openAppointmentDialog = useCallback((appointment: Appointment) => dispatch(actions.openAppointmentDialog(appointment)), [dispatch]);
    const openBookingDialog = useCallback((booking: Booking) => dispatch(actions.openBookingDialog(booking)), [dispatch]);

    useEffect(() => {
        refreshCalendar();
        onUserActionSubmitted.subscribe(refreshCalendar);
        return onUserActionSubmitted.unsubscribe;
    }, [refreshCalendar]);

    const tabs = [
        <ArtistCalendar calendar={calendar} onAppointmentClicked={openAppointmentDialog} onBookingClicked={openBookingDialog}/>,
        <BookingList bookings={calendar?.bookings} onBookingClicked={openBookingDialog}/>,
        <div>Appointments!</div>
    ];

    return (
        <Layout>
            <Container>
                <Tabs labels={labels} currentIndex={currentTabIndex} onChange={setTabIndex}/>
                <div className="mt-5">
                    {tabs[currentTabIndex]}
                </div>
            </Container>
        </Layout>
    );
};

export default DashboardPage;