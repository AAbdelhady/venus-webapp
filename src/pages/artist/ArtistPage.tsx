import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddIcon from '@material-ui/icons/Add';
import Layout from '../../hoc/layout/Layout';
import {fetchArtistById} from '../../api/artist.api';
import classes from './ArtistPage.module.scss';
import ArtistPageSkeleton from './ArtistPageSkeleton';
import FloatingButton from '../../components/ui/floating-button/FloatingButton';
import ArtistSpecialityList from './artist-speciality-list/ArtistSpecialityList';
import {Speciality} from '../../models/speciality.model';
import * as actions from '../../store/actions';
import {Artist} from '../../models/artist.model';

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

const ArtistPage = (props) => {
    const dispatch = useDispatch();
    const [artist, setArtist] = useState<Artist>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArtistById(props.match.params.id)
            .then(response => setArtist(response.data))
            .finally(() => setLoading(false));
    }, [props.match.params.id]);

    const startBookingProcess = useCallback((selectedSpeciality?: Speciality) => {
        if (artist) {
            dispatch(actions.openCreateBookingDialog(artist, selectedSpeciality));
        }
    }, [dispatch, artist]);

    const pageContent = (
        <>
            <div className={classes.Header} style={{backgroundImage: `url(${artist?.profilePictureUrl})`}}/>
            <div className={classes.Body}>
                <div className={classes.NameContainer}>
                    <h1>{artist?.firstName} {artist?.lastName}</h1>
                </div>
                {galleryTemp()}
                <div className={classes.SpecialityListContainer}>
                    <ArtistSpecialityList specialities={artist?.specialityList} selectSpeciality={startBookingProcess}/>
                </div>
            </div>
            <FloatingButton onClick={() => startBookingProcess()}><AddIcon/></FloatingButton>
        </>
    );
    return (
        <Layout>
            {loading ? <ArtistPageSkeleton/> : pageContent}
        </Layout>
    );
};

export default ArtistPage;