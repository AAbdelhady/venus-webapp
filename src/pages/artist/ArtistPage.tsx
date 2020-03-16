import React, {Component} from 'react';
import {connect} from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddIcon from '@material-ui/icons/Add';
import Layout from '../../hoc/layout/Layout';
import {fetchArtistById} from '../../api/artist.api';
import {Artist} from '../../models/artist.model';
import classes from './ArtistPage.module.scss';
import ArtistPageSkeleton from './ArtistPageSkeleton';
import FloatingButton from '../../components/ui/floating-button/FloatingButton';
import ArtistSpecialityList from './artist-speciality-list/ArtistSpecialityList';
import Dialog from '../../hoc/dialog/Dialog';
import CreateBooking from '../../components/create-booking/CreateBooking';
import Login from '../../components/login/Login';
import {BookingRequest, createBooking} from '../../api/booking.api';
import {Subject} from 'rxjs';
import Snackbar from '../../components/ui/snackbar/Snackbar';
import {Speciality} from '../../models/speciality.model';

interface State {
    artist: Artist;
    loading: boolean;
    error: any;
    showBookingDialog: boolean;
    showLoginDialog: boolean;
    selectedSpeciality: Speciality | null;
}

const galleryTemp = () => {
    const skeletons: any[] = [];
    for (let i = 0; i < 12; i++) {
        const skeletonCell = (
            <Col key={`gallery-temp-${i}`} sm={3} md={2} className={classes.GalleryItemContainer}>
                <div style={{
                    backgroundImage: 'url(https://picsum.photos/600/400)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '120px',
                    width: '100%'
                }}/>
            </Col>
        );
        skeletons.push(skeletonCell);
    }
    return <Row className={classes.GalleryContainer}>{skeletons}</Row>;
};

class ArtistPage extends Component<any> {

    state: State = {
        artist: new Artist(),
        loading: true,
        error: null,
        showBookingDialog: false,
        showLoginDialog: false,
        selectedSpeciality: null
    };

    bookingCreatedNotificationSubject = new Subject();

    componentDidMount(): void {
        this.fetchArtist();
    }

    fetchArtist = () => {
        fetchArtistById(this.props.match.params.id)
            .then(response => this.setState({artist: response.data}))
            .catch(error => {
                this.setState({error: error});
                throw error;
            }).finally(() => this.setState({loading: false}));
    };

    handleStartBookingProcess = (selectedSpeciality?: Speciality) => {
        if (this.props.authorizedUser) {
            this.setState({
                showBookingDialog: true,
                selectedSpeciality: selectedSpeciality
            });
        } else {
            this.setState({showLoginDialog: true});
        }
    };

    hideLoginDialog = () => {
        this.setState({showLoginDialog: false});
    };

    hideBookingDialog = () => {
        this.setState({showBookingDialog: false});
    };

    submitCreateBooking = (createBookingForm) => {
        const bookingRequest: BookingRequest = {
            specialityId: createBookingForm.specialityId,
            bookingDate: createBookingForm.date,
            message: createBookingForm.message,
            artistId: this.state.artist.id,
            customerId: this.props.authorizedUser.id
        };
        this.hideBookingDialog();
        createBooking(bookingRequest).then(() => this.bookingCreatedNotificationSubject.next());
    };

    render() {
        const pageContent = (
            <>
                <div className={classes.Header} style={{backgroundImage: `url(${this.state.artist?.profilePictureUrl})`}}/>
                <div className={classes.Body}>
                    <div className={classes.NameContainer}>
                        <h1>{this.state.artist?.firstName} {this.state.artist?.lastName}</h1>
                    </div>
                    {galleryTemp()}
                    <div className={classes.SpecialityListContainer}>
                        <ArtistSpecialityList specialities={this.state.artist?.specialityList} selectSpeciality={this.handleStartBookingProcess}/>
                    </div>
                    <Dialog open={this.state.showBookingDialog} onClose={this.hideBookingDialog}>
                        <CreateBooking specialities={this.state.artist?.specialityList} submit={this.submitCreateBooking} dismiss={this.hideBookingDialog} selectedSpeciality={this.state.selectedSpeciality}/>
                    </Dialog>
                </div>
                <FloatingButton onClick={this.handleStartBookingProcess}><AddIcon/></FloatingButton>
                <Dialog open={this.state.showLoginDialog} onClose={this.hideLoginDialog}>
                    <Login cancel={this.hideLoginDialog}/>
                </Dialog>
                <Snackbar observable={this.bookingCreatedNotificationSubject} severity="success"/>
            </>
        );
        return (
            <Layout history={this.props.history}>
                {this.state.loading ? <ArtistPageSkeleton/> : pageContent}
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        authorizedUser: state.auth.user
    };
};

export default connect(mapStateToProps)(ArtistPage);