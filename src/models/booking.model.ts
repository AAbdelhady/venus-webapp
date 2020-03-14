import {Speciality} from './speciality.model';

export interface Booking {
    id: number;
    bookingDate: Date;
    message: string;
    speciality: Speciality;
}