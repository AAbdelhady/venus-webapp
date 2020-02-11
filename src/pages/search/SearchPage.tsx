import React, {Component} from "react";
import {connect} from 'react-redux';
import Layout from "../../hoc/layout/Layout";
import * as actions from '../../store/actions/index';
import {Pageable, Sort} from '../../models/pageable.model';
import {Artist} from '../../models/artist.model';
import {Page} from '../../models/page.model';
import ArtistCardList from '../../components/artist-card-list/ArtistCardList';
import classes from './SearchPage.module.scss';

interface Props {
    artistPage: Page<Artist>;
    searchArtists(pageable: Pageable);
}

class SearchPage extends Component<Props> {

    componentDidMount(): void {
        const sort: Sort = {
            field: 'id',
            direction: 'desc'
        };
        const pageable = new Pageable(0, 20, sort);
        this.props.searchArtists(pageable);
    }

    render() {
        const artists = this.props.artistPage ? this.props.artistPage.content : [];
        return (
            <Layout>
                <div className={classes.Container}>
                    <ArtistCardList artistList={artists}/>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        artistPage: state.artist.artistPage
    };
};
const mapDispatchToProps = dispatch => {
    return {
        searchArtists: (pageable) => dispatch(actions.searchArtists(pageable))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);