import React, {Component} from "react";
import Layout from "../../hoc/layout/Layout";
import Tabs from '../../components/ui/tabs/Tabs';
import ArtistCalendar from './artist-calendar/ArtisrtCalendar';
import {Container} from 'react-bootstrap';
import {UserCalendar} from '../../models/calendar.model';
import {fetchMyCalendar} from '../../api/calendar.api';
import BookingList from './booking-list/BookingList';
import {Booking} from '../../models/booking.model';
import {Appointment} from '../../models/appointment.model';
import BookingActionDialog from './booking-action/BookingActionDialog';

interface State {
    currentTabIndex: number;
    calendar: UserCalendar | null;
    showAppointmentAction: boolean;
    showBookingAction: boolean;
    selectedAppointment: Appointment | null;
    selectedBooking: Booking | null;
}

const labels = ['Calendar', 'Bookings', 'Appointments'];

class DashboardPage extends Component<any, State> {

    state: State = {
        currentTabIndex: 0,
        calendar: null,
        showAppointmentAction: false,
        showBookingAction: false,
        selectedAppointment: null,
        selectedBooking: null
    };

    componentDidMount() {
        this.refreshCalendar();
    }

    changeTab = (newTabIndex) => this.setState({currentTabIndex: newTabIndex});

    handleStartAppointmentAction = (appointment: Appointment) => {
        this.setState({
            showAppointmentAction: true,
            selectedAppointment: appointment
        });
    };

    handleStartBookingAction = (booking: Booking) => {
        this.setState({
            showBookingAction: true,
            selectedBooking: booking
        });
    };

    handleActionSubmitted = () => {
        this.refreshCalendar();
        this.clearActionState();
    };

    clearActionState = () => {
        this.setState({
            showAppointmentAction: false,
            showBookingAction: false,
            selectedAppointment: null,
            selectedBooking: null
        });
    };

    private refreshCalendar() {
        fetchMyCalendar().then((response) => this.setState({calendar: response.data}));
    };

    get tabContent() {
        const tabs = [
            <ArtistCalendar calendar={this.state.calendar} onAppointmentClicked={this.handleStartAppointmentAction} onBookingClicked={this.handleStartBookingAction}/>,
            <BookingList bookings={this.state.calendar?.bookings} onBookingClicked={this.handleStartBookingAction}/>,
            <div>Appointments!</div>
        ];
        return tabs[this.state.currentTabIndex];
    }

    render() {
        return (
            <Layout>
                <Container>
                    <Tabs labels={labels} currentIndex={this.state.currentTabIndex} onChange={this.changeTab}/>
                    <div className="mt-5">
                        {this.tabContent}
                    </div>
                </Container>
                <BookingActionDialog show={this.state.showBookingAction} booking={this.state.selectedBooking} onActionSubmitted={this.handleActionSubmitted} onActionDiscarded={this.clearActionState}/>
            </Layout>
        );
    }
}

export default DashboardPage;