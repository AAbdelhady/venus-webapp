import axios from '../axios';

const root = 'booking';

export const fetchMyBookings = () => axios.get(root);

export const createBooking = (bookingRequest: BookingRequest) => axios.post(root, bookingRequest);

export const offerAppointmentTimes = (bookingId: number, offeredTimes: string[]) => {
    const url = `${root}/${bookingId}/offer`;
    return axios.post(url, offeredTimes);
};

export interface BookingRequest {
    specialityId: number;
    bookingDate: Date;
    message: string;
    artistId: number;
    customerId: number;
}