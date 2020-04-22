import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Role, User} from '../../../../models/user.model';
import * as actions from '../../../../store/actions';
import ArtistAppointmentDetails from './artist-appointment-details/ArtistAppointmentDetails';
import CustomerAppointmentDetails from './customer-appointment-details/CustomerAppointmentDetails';
import {Appointment} from '../../../../models/appointment.model';

interface Props {
    appointment: Appointment;
    authorizedUser: User;
}

const AppointmentDetails = (props: Props) => {
    const dispatch = useDispatch();
    const dismiss = useCallback(() => dispatch(actions.closeUserActionDialog()), [dispatch]);
    return props.authorizedUser.role === Role.ARTIST
        ? <ArtistAppointmentDetails appointment={props.appointment} dismiss={dismiss}/>
        : <CustomerAppointmentDetails appointment={props.appointment} dismiss={dismiss}/>;
};

export default AppointmentDetails;