import axios from '../axios';

const root = 'appointment';

export const createAppointment = (bookingId: number, offeringId: number) => {
    const request: AppointmentRequest = {
        bookingId: bookingId,
        offeringId: offeringId
    };
    return axios.post(root, request);
}

export interface AppointmentRequest {
    bookingId: number;
    offeringId: number;
}