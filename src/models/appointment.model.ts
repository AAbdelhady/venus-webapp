import {Speciality} from './speciality.model';
import {User} from './user.model';

export interface Appointment {
    id: number;
    bookingDate: string;
    message: string;
    speciality: Speciality;
    customer: User
}