import {User} from './user.model';
import {Appointment} from './appointment.model';
import {Booking} from './booking.model';

export interface Notification {
    id: number;
    receiver: User;
    sender: User;
    title: string;
    body: string;
    type: NotificationType;
    booking?: Booking;
    appointment?: Appointment;
}

export enum NotificationType {
    BOOKING_REQUEST = 'BOOKING_REQUEST',
    BOOKING_OFFERING = 'BOOKING_OFFERING',
    APPOINTMENT_CONFIRMED = 'APPOINTMENT_CONFIRMED'
}