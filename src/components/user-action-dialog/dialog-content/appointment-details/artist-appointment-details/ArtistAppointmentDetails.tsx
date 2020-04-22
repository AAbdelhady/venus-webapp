import React from 'react';
import {Appointment} from '../../../../../models/appointment.model';

interface Props {
    appointment: Appointment | null;
    dismiss();
}

const ArtistAppointmentDetails = (props: Props) => {
    return (
        <div>
            <h1>ArtistAppointmentDetails</h1>
            {JSON.stringify(props)}
        </div>
    );
};

export default ArtistAppointmentDetails;