import React, {Component} from "react";
import Layout from "../../hoc/layout/Layout";
import {fetchArtistById} from '../../api/artist.api';
import {Artist} from '../../models/artist.model';
import classes from './ArtistPage.module.scss';
import ArtistPageSkeleton from './ArtistPageSkeleton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface State {
    artist: Artist | null;
    loading: boolean;
    error: any;
}

const galleryTemp = () => {
    const skeletons: any[] = [];
    for (let i = 0; i < 12; i++) {
        const skeletonCell = (
            <Col sm={3} md={2} className={classes.GalleryItemContainer}>
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
        artist: null,
        loading: true,
        error: null
    };

    componentDidMount(): void {
        fetchArtistById(this.props.match.params.id)
            .then(response => this.setState({artist: response.data}))
            .catch(error => {
                this.setState({error: error});
                throw error;
            }).finally(() => this.setState({loading: false}));
    }

    render() {
        const pageContent = (
            <>
                <div className={classes.Header} style={{backgroundImage: `url(${this.state.artist?.profilePictureUrl})`}}/>
                <div className={classes.NameContainer}>
                    <h1>{this.state.artist?.firstName} {this.state.artist?.lastName}</h1>
                </div>
                {galleryTemp()}
            </>
        );
        return (
            <Layout activeRoute={this.props.history}>
                {this.state.loading ? <ArtistPageSkeleton/> : pageContent}
            </Layout>
        );
    }
}

export default ArtistPage;