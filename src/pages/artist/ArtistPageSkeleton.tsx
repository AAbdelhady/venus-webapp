import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Col from 'react-bootstrap/Col';
import classes from './ArtistPage.module.scss';
import Row from 'react-bootstrap/Row';

const gallerySkeleton = () => {
    const skeletons: any[] = [];
    for (let i = 0; i < 12; i++) {
        const skeletonCell = (
            <Col sm={3} md={2} className={classes.GalleryItemContainer}>
                <Skeleton variant="rect" width="100%" height={120}/>
            </Col>
        );
        skeletons.push(skeletonCell);
    }
    return <Row className={classes.GalleryContainer}>{skeletons}</Row>;
};

const ArtistPageSkeleton = () => {
    return (
        <>
            <Skeleton variant="rect" width="100%" height={400}/>
            <div className={classes.NameContainer}>
                <Skeleton variant="rect" width={150} height={30} style={{display: 'inline-block'}}/>
                <Skeleton variant="rect" width={150} height={30} style={{display: 'inline-block', marginLeft: '10px'}}/>
            </div>
            {gallerySkeleton()}
        </>
    );
};

export default ArtistPageSkeleton;