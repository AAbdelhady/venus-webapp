import React, {useEffect, useState} from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import classes from './ArtistCalendar.module.scss';
import {CalendarEvent, UserCalendar} from '../../../models/calendar.model';
import {Booking, bookingToEvent} from '../../../models/booking.model';
import {Appointment, appointmentToEvent} from '../../../models/appointment.model';

interface Props {
    calendar: UserCalendar | null;
    onAppointmentClicked(appointment: Appointment);
    onBookingClicked(booking: Booking);
}

const groupId = {
    appointment: 'appointment',
    booking: 'booking'
};

const appointmentEvents = (calendar: UserCalendar) => calendar.appointments.map(a => appointmentToEvent(a, groupId.appointment));
const bookingEvents = (calendar: UserCalendar) => calendar.bookings.map(b => bookingToEvent(b, groupId.booking));

const calendarToEvents = (calendar: UserCalendar | null) => {
    if (!calendar) {
        return [];
    }
    const events: CalendarEvent[] = [...appointmentEvents(calendar), ...bookingEvents(calendar)];
    events.forEach(b => b.className = classes.EventTile);
    return events;
};

const handleEventClicked = (evt: any, props: Props) => {
    switch (evt.event.groupId) {
        case groupId.appointment:
            props.onAppointmentClicked(evt.event.extendedProps);
            break;
        case groupId.booking:
            props.onBookingClicked(evt.event.extendedProps);
            break;
        default:
            throw new Error(`Unsupported event type [${evt.event.groupId}]`);
    }
};

const ArtistCalendar = (props: Props) => {
    const [events, setEvents] = useState<any>([]);
    useEffect(() => setEvents(calendarToEvents(props.calendar)), [props.calendar]);
    const onEventClicked = (event: any) => handleEventClicked(event, props);
    return <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} events={events} eventClick={onEventClicked}/>;
};

export default ArtistCalendar;