import React from 'react';
import {Speciality} from '../../../../../models/speciality.model';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {TextField} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import ns from '../../../../../i18n/namespace';
import Button from '@material-ui/core/Button';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const specialityFormSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    price: Yup.number().min(1).required('Required')
});

interface Props {
    add(speciality: Speciality);

    remove(speciality: Speciality);
}

const SpecialityEntry = (props: Props) => {
    const {t} = useTranslation(ns.register);
    const formik = useFormik<Speciality>({
        initialValues: {
            name: '',
            price: 0
        },
        validationSchema: specialityFormSchema,
        onSubmit: (event) => addSpeciality(event)
    });
    const addSpeciality = (speciality: Speciality) => {
        props.add(speciality);
        formik.resetForm();
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <Row>
                <Col sm={4}>
                    <TextField name="name" label={t('SPECIALITY_ENTRY.NAME')} variant="outlined" onChange={formik.handleChange} value={formik.values.name}/>
                </Col>
                <Col sm={4}>
                    <TextField name="price" type="number" label={t('SPECIALITY_ENTRY.PRICE')} variant="outlined" onChange={formik.handleChange} value={formik.values.price}/>
                </Col>
                <Col sm={{span: 1, offset: 2}}>
                    <Button color="primary" type="submit" disabled={!!Object.keys(formik.errors).length || !formik.dirty}>+</Button>
                </Col>
            </Row>
            {JSON.stringify(formik.errors)}
        </form>
    );
};

export default SpecialityEntry;