import React, {Component} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArtistCategoryPicker from './artist-category-picker/ArtistCategoryPicker';
import ArtistSpecialityPicker from './artist-speciality-picker/ArtistSpecialityPicker';
import {updateObject} from '../../../utils/common';
import {ArtistRequest, fetchArtistCategories} from '../../../api/artist.api';
import classes from './RegisterArtist.module.scss';

const backButtonIconStyle = {
    fontSize: '1em',
    margin: '0 0.5em 0 -1em'
};

interface Props {
    register(registerRequest: ArtistRequest);
    back();
}

interface State {
    activeStep: number,
    artist: ArtistRequest,
    categories: []
}

class RegisterArtist extends Component<Props> {

    state: State = {
        activeStep: 0,
        artist: {
            category: null,
            specialities: []
        },
        categories: []
    };

    componentDidMount(): void {
        fetchArtistCategories().then(res =>
            this.setState({categories: res.data})
        );
    }

    handleNext = () => {
        this.setState((prevState: State) => ({activeStep: prevState.activeStep + 1}));
    };

    setArtistCategory = (category: string) => {
        this.setState((prevState: State) => {
            const artist = updateObject(prevState.artist, {category: category});
            return {artist: artist};
        });
        this.handleNext();
    };

    setArtistSpecialities = (specialities: []) => {
        this.setState((prevState: State) => {
            const artist = updateObject(prevState.artist, {specialities: specialities});
            return {artist: artist};
        });
        this.handleNext();
    };

    submit = () => this.props.register(this.state.artist);

    get steps() {
        return [
            {id: 0, label: 'Pick Category', template: <ArtistCategoryPicker submit={this.setArtistCategory} categories={this.state.categories}/>},
            {id: 1, label: 'Add specialities', template: <ArtistSpecialityPicker submit={this.setArtistSpecialities}/>},
            {id: 2, label: 'Done', template: this.finishTemplate}
        ];
    }

    get finishTemplate() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.submit}>Finish</Button>
            </div>
        )
    }

    render() {
        return (
            <div className={classes.Container}>
                <Button onClick={this.props.back}><ArrowBackIcon style={backButtonIconStyle}/>Back</Button>
                {this.steps[this.state.activeStep].template}
                <Stepper activeStep={this.state.activeStep} alternativeLabel style={{marginTop: 'auto'}}>
                    {this.steps.map(step => (
                        <Step key={step.id}>
                            <StepLabel>{step.label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
        )
    };
}

export default RegisterArtist;