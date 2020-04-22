import {User} from './user.model';
import {CalendarEvent} from './calendar.model';
import variables from '../assets/css/variables.scss';
import {Artist} from './artist.model';

export interface Appointment {
    id: number;
    appointmentTime: string;
    artist: Artist;
    customer: User;
}

export const appointmentToEvent = (appointment: Appointment, groupId: string): CalendarEvent => ({
    id: appointment.id,
    groupId: groupId,
    start: appointment.appointmentTime,
    title: `${appointment.customer.firstName} ${appointment.customer.lastName}`,
    backgroundColor: variables.primaryMain,
    textColor: variables.primaryText,
    extendedProps: appointment
});