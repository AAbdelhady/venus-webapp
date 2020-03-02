import React from 'react';
import {useSelector} from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Artist} from '../../../models/artist.model';
import Card from '@material-ui/core/Card';
import classes from './ArtistCard.module.scss';
import {NavLink} from 'react-router-dom';

interface Props {
    artist: Artist;
}

const ArtistCard = (props: Props) => {
    const langPrefix = useSelector(state => state.i18n.langPrefix);
    return (
        <NavLink to={`${langPrefix}/artist/${props.artist.id}`}>
            <Card raised className={classes.Card}>
                <Row>
                    <Col sm={12} className={classes.ProfilePicContainer}>
                        <div className={classes.ProfilePic} style={{backgroundImage: `url(${props.artist.profilePictureUrl})`}}/>
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
        </NavLink>
    );
};

export default ArtistCard;