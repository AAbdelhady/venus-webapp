import React, {useEffect, useState} from 'react';
import classes from './ArtistCategoryPicker.module.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Category} from '../../../../../../models/category.model';
import {fetchArtistCategories} from '../../../../../../api/artist.api';

interface Props {
    submit(category: string);
}

const ArtistCategoryPicker = (props: Props) => {

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetchArtistCategories().then(res => setCategories(res.data));
    }, [setCategories]);

    const listItems = categories.map(cat =>
        <Col sm={6} key={cat.value} className={classes.CategoryTile} style={{backgroundImage: `url(${cat.photoUrl})`}}>
            <span onClick={() => props.submit(cat.value)}>
                    <p>{cat.text}</p>
            </span>
        </Col>
    );

    return (
        <Row>
            {listItems}
        </Row>
    )
};

export default ArtistCategoryPicker;