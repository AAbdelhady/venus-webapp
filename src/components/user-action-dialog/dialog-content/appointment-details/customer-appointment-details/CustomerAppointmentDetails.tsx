import React from 'react';
import {Appointment} from '../../../../../models/appointment.model';

interface Props {
    appointment: Appointment | null;
    dismiss();
}

const CustomerAppointmentDetails = (props: Props) => {
    return (
        <div>
            <h1>CustomerAppointmentDetails</h1>
            {JSON.stringify(props)}
        </div>
    );
};

export default CustomerAppointmentDetails;