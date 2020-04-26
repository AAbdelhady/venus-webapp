import React, {Component} from "react";
import {RouteComponentProps} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Layout from "../../hoc/layout/Layout";
import {Pageable, Sort} from '../../models/pageable.model';
import {Artist} from '../../models/artist.model';
import ArtistCardList from './artist-card-list/ArtistCardList';
import classes from './SearchPage.module.scss';
import JumpToTop from '../../components/jump-to-top/JumpToTop';
import {fetchArtistCategories} from '../../api/artist.api';
import {Category} from '../../models/category.model';
import Select from '../../components/ui/select/Select';

const PAGE_SIZE = 20;

interface Props {
    artistList: Artist[];
    totalElements: number;
    currentPageNumber: number;
    history: RouteComponentProps;
    isFetchingPage: boolean;
    searchArtists(pageable: Pageable, category: string | null);
}

interface State {
    currentCategory: string | null;
    categories: Category[];
}

class SearchPage extends Component<Props> {

    state: State = {
        currentCategory: null,
        categories: []
    };

    componentDidMount(): void {
        this.fetchCategories();
    }

    fetchCategories() {
        fetchArtistCategories().then(res => {
            this.setState({
                categories: res.data,
                currentCategory: res.data[0].value
            });
            this.startOver(res.data[0].value);
        });
    }

    startOver = (category) => {
        this.fetchPage(0, category);
    };

    nextPage = () => {
        this.fetchPage(this.props.currentPageNumber + 1, this.state.currentCategory);
    };

    refresh = () => {
        this.startOver(this.state.currentCategory);
    };

    onCategoryChanged = (event) => {
        const newCategory = event.target.value;
        this.setState({currentCategory: newCategory});
        this.startOver(newCategory);
    };

    fetchPage = (pageNumber, category) => {
        const sort: Sort = {
            field: 'id',
            direction: 'desc'
        };
        const pageable = new Pageable(pageNumber, PAGE_SIZE, sort);
        this.props.searchArtists(pageable, category);
    };

    get hasMoreResults() {
        return this.props.artistList.length !== this.props.totalElements;
    }

    render() {
        const artists = this.props.artistList || [];
        return (
            <Layout>
                <div className={classes.Container}>
                    <div className={classes.CategorySelectContainer}>
                        <Select name="specialityId"
                                options={this.state.categories}
                                value={this.state.currentCategory}
                                onChange={this.onCategoryChanged}
                                textProperty="text"
                                valueProperty="value"
                        />
                    </div>
                    <ArtistCardList artistList={artists} hasMore={this.hasMoreResults} nextPage={this.nextPage} refresh={this.refresh} loading={this.props.isFetchingPage} pageSize={PAGE_SIZE}/>
                </div>
                <JumpToTop/>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    artistList: state.artist.artistList,
    currentPageNumber: state.artist.currentPageNumber,
    totalElements: state.artist.totalElements,
    isFetchingPage: state.artist.loading
});

const mapDispatchToProps = dispatch => ({
    searchArtists: (pageable, category) => dispatch(actions.searchArtists(pageable, category))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);