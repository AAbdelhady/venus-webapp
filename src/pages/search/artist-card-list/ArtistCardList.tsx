import React from 'react';
import ArtistCard from './artist-card/ArtistCard';
import classes from './ArtistCardList.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Artist} from '../../../models/artist.model';
import ArtistCardSkeleton from './artist-card/ArtistCardSkeleton';
import DragHandleIcon from '@material-ui/icons/DragHandle';

interface Props {
    artistList: Artist[];
    hasMore: boolean;
    loading: boolean;
    pageSize: number;
    nextPage();
}

const endMessage = <h3 style={{textAlign: 'center'}}><DragHandleIcon/></h3>;

const artistCardList = (artistList) => artistList.map(artist => (
    <Col key={artist.id} sm={4}>
        <ArtistCard key={artist.id} artist={artist}/>
    </Col>
));


const artistCardSkeletons = (count) => {
    const artistCardSkeletonList: any[] = [];
    for (let i = 0; i < count; i++) {
        artistCardSkeletonList.push(
            <Col key={`artist-card-skeleton-${i}`} sm={4}>
                <ArtistCardSkeleton/>
            </Col>
        )
    }
    return artistCardSkeletonList;
};

const ArtistCardList = (props: Props) => {
    const cardList: any[] = [];
    if (props.artistList) {
        cardList.push(artistCardList(props.artistList));
    }
    if (props.loading) {
        cardList.push(artistCardSkeletons(props.pageSize));
    }
    const nextPage = () => {
        if (!props.loading) {
            props.nextPage();
        }
    };
    return (
        <InfiniteScroll
            className={classes.ScrollContainer}
            dataLength={props.artistList.length}
            next={nextPage}
            hasMore={props.hasMore}
            loader={null}
            endMessage={endMessage}>
            <Row>
                {cardList}
            </Row>
        </InfiniteScroll>
    );
};

export default ArtistCardList;