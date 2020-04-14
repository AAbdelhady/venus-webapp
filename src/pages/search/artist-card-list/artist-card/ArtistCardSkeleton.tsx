import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Col from 'react-bootstrap/Col';
import classes from './ArtistCard.module.scss';
import Row from 'react-bootstrap/Row';
import Card from '@material-ui/core/Card';

const ArtistCardSkeleton = () => (
    <Card raised className={classes.Card}>
        <Row>
            <Col xs={12} className={classes.ProfilePicContainer}>
                <Skeleton variant="rect" width="100%" height="500px"/>
            </Col>
            <Col xs={{span: 6, offset: 3}}>
                <div className={classes.Content}>
                    <Skeleton width="100%" height="1rem"/>
                </div>
            </Col>
            <Col xs={{span: 4, offset: 4}}>
                <div className={classes.Content}>
                    <Skeleton width="100%" height="1rem"/>
                </div>
            </Col>
        </Row>
    </Card>
);

export default ArtistCardSkeleton;