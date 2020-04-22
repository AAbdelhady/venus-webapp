import React, {useCallback, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import DatePicker from '../../../ui/date-picker/DatePicker';
import ns from '../../../../i18n/namespace';
import {Speciality} from '../../../../models/speciality.model';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {formHasErrors} from '../../../../utils/common';
import Select from '../../../ui/select/Select';
import classes from './CreateBooking.module.scss';
import * as actions from '../../../../store/actions';
import {BookingRequest, createBooking} from '../../../../api/booking.api';
import {Artist} from '../../../../models/artist.model';
import {User} from '../../../../models/user.model';

interface Props {
    authorizedUser: User;
    artist: Artist;
    selectedSpeciality?: Speciality | null;
}

interface CreateBookingForm {
    specialityId: number | null;
    date: Date;
    message: string;
}

const createBookingFormSchema = Yup.object().shape({
    specialityId: Yup.number().integer().required('Required'),
    date: Yup.date().min(new Date()).required('Required'),
    message: Yup.string()
});

const submitCreateBooking = (createBookingForm: CreateBookingForm, props: Props, dispatch) => {
    if (!props.artist || !createBookingForm.specialityId) {
        return
    }
    const bookingRequest: BookingRequest = {
        specialityId: createBookingForm.specialityId,
        bookingDate: createBookingForm.date,
        message: createBookingForm.message,
        artistId: props.artist.id,
        customerId: props.authorizedUser.id
    };
    createBooking(bookingRequest).then(() => dispatch(actions.showSnackbar('Booking has been created successfully!', 'success')));
    dispatch(actions.closeUserActionDialog());
};

const CreateBooking = (props: Props) => {
    const dispatch = useDispatch();
    const {t} = useTranslation(ns.booking);
    const formik = useFormik<CreateBookingForm>({
        initialValues: {
            specialityId: null,
            date: new Date(),
            message: ''
        },
        validationSchema: createBookingFormSchema,
        onSubmit: (event) => submitCreateBooking(event, props, dispatch)
    });
    const updateDate = useCallback(newDate => formik.setFieldValue('date', newDate), [formik]);

    useEffect(() => {
        if (props.selectedSpeciality) {
            formik.setFieldValue('specialityId', props.selectedSpeciality.id);
        }
        // eslint-disable-next-line
    }, [props.selectedSpeciality]);

    return (
        <form onSubmit={formik.handleSubmit} className={classes.Container}>
            <h2>{t('TITLE')}</h2>
            <Row>
                <Col xs={12}>
                    <Select name="specialityId"
                            label={t('SERVICE')}
                            options={props.artist.specialityList}
                            value={formik.values.specialityId}
                            onChange={formik.handleChange}
                            textProperty="name"
                            valueProperty="id"
                    />
                </Col>
                <Col xs={12} className="mt-3">
                    <DatePicker label={t('BOOKING_DATE')} value={formik.values.date} onChange={updateDate} disablePast/>
                </Col>
                <Col xs={12} className="mt-3">
                    <TextField name="message" label={t('NOTES')} value={formik.values.message} onChange={formik.handleChange} className="w-100"/>
                </Col>
                <Row className="mt-3 col-12">
                    <Col sm={{span: 3, offset: 3}}>
                        <Button color="primary" type="submit" disabled={formHasErrors(formik)}>Submit</Button>
                    </Col>
                    <Col sm={3}>
                        <Button onClick={() => dispatch(actions.closeUserActionDialog())}>Dismiss</Button>
                    </Col>
                </Row>
            </Row>
        </form>
    );
};

export default CreateBooking;