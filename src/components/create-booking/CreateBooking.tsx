import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import DatePicker from '../ui/date-picker/DatePicker';
import ns from '../../i18n/namespace';
import {Speciality} from '../../models/speciality.model';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {formHasErrors} from '../../utils/common';
import Select from '../ui/select/Select';
import classes from './CreateBooking.module.scss';

interface Props {
    selectedSpeciality?: Speciality | null;
    specialities?: Speciality[];
    submit(form: CreateBookingForm);
    dismiss();
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

const CreateBooking = (props: Props) => {
    const [initialized, setInitialized] = useState(false);
    const {t} = useTranslation(ns.booking);
    const formik = useFormik<CreateBookingForm>({
        initialValues: {
            specialityId: null,
            date: new Date(),
            message: ''
        },
        validationSchema: createBookingFormSchema,
        onSubmit: (event) => props.submit(event)
    });

    if (props.selectedSpeciality && !initialized) {
        setInitialized(true);
        formik.setFieldValue('specialityId', props.selectedSpeciality.id);
    }

    const updateDate = newDate => formik.setFieldValue('date', newDate);

    return (
        <form onSubmit={formik.handleSubmit} className={classes.Container}>
            <h2>{t('TITLE')}</h2>
            <Row>
                <Col xs={12}>
                    <Select name="specialityId"
                            label={t('SERVICE')}
                            options={props.specialities}
                            value={formik.values.specialityId}
                            onChange={formik.handleChange}
                            textProperty="name"
                            valueProperty="id"
                    />
                </Col>
                <Col xs={12} className="mt-3">
                    <DatePicker name="date" label={t('BOOKING_DATE')} value={formik.values.date} onChange={updateDate} disablePast/>
                </Col>
                <Col xs={12} className="mt-3">
                    <TextField name="message" label={t('NOTES')} value={formik.values.message} onChange={formik.handleChange} className="w-100"/>
                </Col>
                <Row className="mt-3 col-12">
                    <Col sm={{span: 3, offset: 3}}>
                        <Button color="primary" type="submit" disabled={formHasErrors(formik)}>Submit</Button>
                    </Col>
                    <Col sm={3}>
                        <Button onClick={props.dismiss}>Dismiss</Button>
                    </Col>
                </Row>
            </Row>
        </form>
    );
};

export default CreateBooking;