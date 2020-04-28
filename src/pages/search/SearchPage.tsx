import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Layout from "../../hoc/layout/Layout";
import {Pageable, Sort} from '../../models/pageable.model';
import ArtistCardList from './artist-card-list/ArtistCardList';
import classes from './SearchPage.module.scss';
import JumpToTop from '../../components/jump-to-top/JumpToTop';
import {fetchArtistCategories} from '../../api/artist.api';
import {Category} from '../../models/category.model';
import Select from '../../components/ui/select/Select';
import * as actions from '../../store/actions';

const PAGE_SIZE = 20;

const fetchPage = (pageNumber, category, dispatch) => {
    const sort: Sort = {
        field: 'id',
        direction: 'desc'
    };
    const pageable = new Pageable(pageNumber, PAGE_SIZE, sort);
    dispatch(actions.searchArtists(pageable, category));
};

const SearchPage = () => {
    const dispatch = useDispatch();
    const [currentCategory, setCurrentCategory] = useState<string | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);
    const {artistList, currentPageNumber, totalElements, loading} = useSelector(state => state.artist);

    const startOver = useCallback((category) => fetchPage(0, category, dispatch), [dispatch]);
    const nextPage = () => fetchPage(currentPageNumber + 1, currentCategory, dispatch);

    useEffect(() => {
        fetchArtistCategories().then(res => {
            setCategories(res.data);
            setCurrentCategory(res.data[0].value);
            startOver(res.data[0].value);
        })
    }, [startOver]);

    const onCategoryChanged = (event) => {
        const newCategory = event.target.value;
        setCurrentCategory(newCategory);
        startOver(newCategory);
    };

    return (
        <Layout>
            <div className={classes.Container}>
                <div className={classes.CategorySelectContainer}>
                    <Select name="specialityId"
                            options={categories}
                            value={currentCategory}
                            onChange={onCategoryChanged}
                            textProperty="text"
                            valueProperty="value"
                    />
                </div>
                <ArtistCardList artistList={artistList || []}
                                hasMore={artistList.length !== totalElements}
                                nextPage={nextPage}
                                loading={loading}
                                pageSize={PAGE_SIZE}
                />
            </div>
            <JumpToTop/>
        </Layout>
    );
}

export default SearchPage;