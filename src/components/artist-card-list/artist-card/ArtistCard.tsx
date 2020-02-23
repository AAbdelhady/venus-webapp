import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Artist} from '../../../models/artist.model';
import Card from '@material-ui/core/Card';
import classes from './ArtistCard.module.scss';

interface Props {
    artist: Artist;
}

const ArtistCard = (props: Props) => {
    return (
        <Card raised className={classes.Card}>
            <Row>
                <Col sm={12} className={classes.ProfilePicContainer}>
                    <img className={classes.ProfilePic} src={props.artist.profilePictureUrl} alt="pic"/>
                </Col>
                <Col sm={12}>
                    <div className={classes.Content}>
                        (<strong>{props.artist.id}</strong>) {props.artist.firstName} {props.artist.lastName}
                    </div>
                </Col>
                <Col sm={12}>
                    <div className={classes.Content}>
                        <strong>{props.artist.category}</strong>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

export default ArtistCard;