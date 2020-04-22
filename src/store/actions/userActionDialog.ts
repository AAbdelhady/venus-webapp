import {USER_ACTION_DIALOG as userActionDialogActionTypes} from './actionTypes';
import {Action} from '../reducers/userActionDialog';
import {Subject} from 'rxjs';
import {Artist} from '../../models/artist.model';
import {Speciality} from '../../models/speciality.model';
import {Booking} from '../../models/booking.model';
import {Appointment} from '../../models/appointment.model';

export const openLoginDialog = (): Action => ({
    type: userActionDialogActionTypes.OPEN_LOGIN_DIALOG
});

export const openRegisterDialog = (): Action => ({
    type: userActionDialogActionTypes.OPEN_REGISTER_DIALOG
});

export const openCreateBookingDialog = (artist: Artist, selectedSpeciality?: Speciality): Action => ({
    type: userActionDialogActionTypes.OPEN_CREATE_BOOKING_DIALOG,
    dialogProps: {
        artist: artist,
        selectedSpeciality: selectedSpeciality
    }
});

export const openBookingDialog = (booking: Booking): Action => ({
    type: userActionDialogActionTypes.OPEN_BOOKING_DIALOG,
    dialogProps: {
        booking: booking
    }
});

export const openAppointmentDialog = (appointment: Appointment): Action => ({
    type: userActionDialogActionTypes.OPEN_APPOINTMENT_DIALOG,
    dialogProps: {
        appointment: appointment
    }
});

export const closeUserActionDialog = (): Action => ({
    type: userActionDialogActionTypes.CLOSE_USER_ACTION_DIALOG
});

export const onUserActionSubmitted = new Subject();