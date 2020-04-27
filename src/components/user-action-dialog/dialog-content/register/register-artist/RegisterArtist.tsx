import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArtistCategoryPicker from './artist-category-picker/ArtistCategoryPicker';
import ArtistSpecialityPicker from './artist-speciality-picker/ArtistSpecialityPicker';
import {SpecialityRequest} from '../../../../../api/artist.api';
import classes from './RegisterArtist.module.scss';
import * as actions from '../../../../../store/actions';

const backButtonIconStyle = {
    fontSize: '1em',
    margin: '0 0.5em 0 -1em'
};

interface Props {
    back();
}

const RegisterArtist = (props: Props) => {
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = useState(0);
    const [category, setCategory] = useState<string>('');
    const [specialities, setSpecialities] = useState<SpecialityRequest[]>([]);

    const handleNext = () => setActiveStep((prevState) => (prevState + 1));

    const setArtistCategory = (category: string) => {
        setCategory(category);
        handleNext();
    };

    const setArtistSpecialities = (specialities: SpecialityRequest[]) => {
        setSpecialities(specialities);
        handleNext();
    };

    const submit = () => dispatch(actions.registerArtist(category, specialities));

    const steps = [
        {id: 0, label: 'Pick Category', template: <ArtistCategoryPicker submit={setArtistCategory}/>},
        {id: 1, label: 'Add specialities', template: <ArtistSpecialityPicker submit={setArtistSpecialities}/>},
        {id: 2, label: 'Done', template: <div><Button variant="contained" color="primary" onClick={submit}>Finish</Button></div>}
    ];

    return (
        <div className={classes.Container}>
            <Button onClick={props.back}><ArrowBackIcon style={backButtonIconStyle}/>Back</Button>
            {steps[activeStep].template}
            <Stepper activeStep={activeStep} alternativeLabel style={{marginTop: 'auto'}}>
                {steps.map(step => (
                    <Step key={step.id}>
                        <StepLabel>{step.label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

export default RegisterArtist;