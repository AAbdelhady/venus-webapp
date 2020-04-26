import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Dialog from '../../hoc/dialog/Dialog';
import * as actions from '../../store/actions';
import CreateBooking from './dialog-content/create-booking/CreateBooking';
import {User} from '../../models/user.model';
import Login from './dialog-content/login/Login';
import Register from './dialog-content/register/Register';
import BookingDetails from './dialog-content/booking-details/BookingDetails';
import AppointmentDetails from './dialog-content/appointment-details/AppointmentDetails';

export enum DialogType {
    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
    CREATE_BOOKING = 'CREATE_BOOKING',
    BOOKING = 'BOOKING',
    APPOINTMENT = 'APPOINTMENT'
}

const dialogContent = (type: DialogType, props: any, authorizedUser: User): any[] => {
    if (!authorizedUser || type === DialogType.LOGIN) {
        return [<Login/>, false];
    }
    switch (type) {
        case DialogType.REGISTER:
            return [<Register/>, true];
        case DialogType.CREATE_BOOKING:
            return [<CreateBooking authorizedUser={authorizedUser} artist={props.artist} selectedSpeciality={props.selectedSpeciality}/>, false];
        case DialogType.BOOKING:
            return [<BookingDetails authorizedUser={authorizedUser} booking={props.booking}/>, false];
        case DialogType.APPOINTMENT:
            return [<AppointmentDetails authorizedUser={authorizedUser} appointment={props.appointment}/>, false];
        default:
            return [null, false];
    }
};

const UserActionDialog = () => {
    const dispatch = useDispatch();
    const {show, dialogType, dialogProps} = useSelector(state => state.userActionDialog);
    const authorizedUser = useSelector(state => state.auth.user);
    const [content, blockClose] = dialogContent(dialogType, dialogProps, authorizedUser);
    return (
        <Dialog open={show} onClose={() => dispatch(actions.closeUserActionDialog())} blockClose={blockClose}>
            {content}
        </Dialog>
    );
};

export default UserActionDialog;