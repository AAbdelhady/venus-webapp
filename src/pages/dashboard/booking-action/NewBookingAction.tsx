import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Booking} from '../../../models/booking.model';
import TimePicker from '../../../components/ui/time-picker/TimePicker';
import Button from '@material-ui/core/Button';
import {addItemIfNotExist} from '../../../utils/array';
import classes from './BookingAction.module.scss';
import {offerAppointmentTimes} from '../../../api/booking.api';

interface Props {
    booking: Booking | null;
    onActionSubmitted();
    onActionDiscarded();
}

const appointmentTimeEntry = (time: string, onClick: any) => (
    <Row key={time}>
        <Col xs={8}><p>{time}</p></Col>
        <Col xs={4}><Button color="primary" onClick={() => onClick(time)} className={classes.AddRemoveBtn}>-</Button></Col>
    </Row>
);

const initialTimePickerValue = () => {
    const dt = new Date();
    return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 1, 12, 0, 0);
};

const submitOfferedTimes = (booking, appointmentTimes, callback) => {
    if (booking) {
        offerAppointmentTimes(booking.id, appointmentTimes).then(callback);
    }
};

const NewBookingAction = (props: Props) => {
    const [selectedAppointmentTime, setSelectedAppointmentTime] = useState(initialTimePickerValue());
    const [appointmentTimes, setAppointmentTimes] = useState<string[]>([]);
    const addAppointmentTime = () => setAppointmentTimes(addItemIfNotExist(appointmentTimes, selectedAppointmentTime.toLocaleTimeString()));
    const removeAppointmentTime = (item) => setAppointmentTimes(appointmentTimes.filter(i => i !== item));
    const submit = () => submitOfferedTimes(props.booking, appointmentTimes, props.onActionSubmitted);
    return props.booking && (
        <div className={classes.NewBookingActionContainer}>
            <Row>
                <Col sm={6}>
                    {props.booking.customer.firstName} {props.booking.customer.lastName}
                </Col>
                <Col sm={6}>
                    {props.booking.speciality.name}
                </Col>
                <Col sm={6} className="mt-3">
                    {props.booking.bookingDate}
                </Col>
            </Row>
            <Row className="mt-5">
                <Col xs={8}>
                    <TimePicker value={selectedAppointmentTime} onChange={setSelectedAppointmentTime} label="Appointment Time"/>
                </Col>
                <Col xs={4}>
                    <Button color="primary" onClick={addAppointmentTime} className={classes.AddRemoveBtn}>+</Button>
                </Col>
            </Row>
            <div className="mt-3">
                {appointmentTimes.map(t => appointmentTimeEntry(t, removeAppointmentTime))}
            </div>
            <Row className="mt-5">
                <Col sm={{span: 2, offset: 2}}>
                    <Button color="primary" variant="contained" onClick={submit} disabled={appointmentTimes.length === 0}>Submit</Button>
                </Col>
                <Col sm={{span: 2, offset: 3}}>
                    <Button onClick={props.onActionDiscarded}>Dismiss</Button>
                </Col>
            </Row>
        </div>
    );
};

export default NewBookingAction;