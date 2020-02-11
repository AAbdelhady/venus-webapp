import React from 'react';
import ArtistCard from '../artist-card/ArtistCard';
import classes from './ArtistCardList.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ArtistCardList = (props) => {
    let cardList = null;
    if (props.artistList) {
        cardList = props.artistList.map(artist => (
            <Col sm={4}>
                <div className={classes.Card}>
                    <ArtistCard key={artist.id} artist={artist}/>
                </div>
            </Col>
        ));
    }
    return (
        <Row>
            {cardList}
        </Row>
    );
};

export default ArtistCardList;