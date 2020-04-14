import {Speciality} from './speciality.model';
import {CalendarEvent} from './calendar.model';
import variables from '../assets/css/variables.scss';
import {User} from './user.model';

export interface Booking {
    id: number;
    bookingDate: string;
    message: string;
    speciality: Speciality;
    customer: User;
    status: BookingStatus;
    offerings: Offering[];
}

export enum BookingStatus {
    NEW = 'NEW',
    OFFERED = 'OFFERED',
    CANCELLED = 'CANCELLED'
}

export interface Offering {
    time: Date;
}

export const bookingToEvent = (booking: Booking, eventGroupId: string): CalendarEvent => ({
    id: booking.id,
    groupId: eventGroupId,
    start: booking.bookingDate,
    title: `${booking.customer.firstName} ${booking.customer.lastName} (${booking.speciality?.name})`,
    backgroundColor: bookingEventBgColor[booking.status],
    textColor: variables.primaryText,
    extendedProps: booking
});

const bookingEventBgColor: { [key in BookingStatus]: string } = {
    [BookingStatus.NEW]: variables.secondaryDark,
    [BookingStatus.OFFERED]: variables.secondaryMain,
    [BookingStatus.CANCELLED]: variables.secondaryLight
};