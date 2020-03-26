import {Booking} from './booking.model';

export interface UserCalendar {
    appointments: any[];
    bookings: Booking[];
}

export interface CalendarEvent {
    id: number;
    groupId: string;
    title: string;
    start: string;
    extendedProps: any;
    end?: string;
    backgroundColor?: string;
    textColor?: string;
    className?: string
}