import axios from '../axios';

const root = 'booking';

export const fetchMyBooking = () => {
    const url = `${root}`;
    return axios.get(url);
};

export const createBooking = (bookingRequest: BookingRequest) => {
    const url = `${root}`;
    return axios.post(url, bookingRequest);
};

export interface BookingRequest {
    specialityId: number;
    bookingDate: Date;
    message: string;
    artistId: number;
    customerId: number;
}