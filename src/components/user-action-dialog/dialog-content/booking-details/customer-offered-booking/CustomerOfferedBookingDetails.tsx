import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Booking, Offering} from '../../../../../models/booking.model';
import classes from './CustomerOfferedBookingDetails.module.scss';
import Button from '@material-ui/core/Button';
import * as actions from '../../../../../store/actions';
import {createAppointment} from '../../../../../api/appointment.api';

interface Props {
    booking: Booking | null;
    dismiss();
}

const submitSelectOffering = (booking: Booking | null, offering: Offering, dispatch) => {
    if (booking) {
        createAppointment(booking.id, offering.id).then(() => dispatch(actions.showSnackbar('Appointment has been confirmed!', 'success')));
        dispatch(actions.closeUserActionDialog());
    }
}

const offeringList = (offerings: Offering[], onOfferingAccepted) => {
    return offerings && offerings.map(offering =>
        <div className={classes.Container} onClick={() => onOfferingAccepted(offering)}>
            {offering.time}
        </div>
    );
};

const CustomerOfferedBookingDetails = (props: Props) => {
    const dispatch = useDispatch();
    const onOfferingAccepted = useCallback((offering) => submitSelectOffering(props.booking, offering, dispatch), [props.booking, dispatch]);
    return (
        <div>
            <h1>CustomerOfferedBookingDetails</h1>
            <div>
                {props.booking?.offerings && offeringList(props.booking.offerings, onOfferingAccepted)}
            </div>
            <div className="d-flex">
                <Button className="mx-auto" onClick={props.dismiss}>Dismiss</Button>
            </div>
        </div>
    );
};

export default CustomerOfferedBookingDetails;