import React from 'react';
import {Category} from '../../../models/category.model';
import Select from '@material-ui/core/Select';
import classes from './CategorySelect.module.scss';

interface Props {
    categories: Category[];
    selected: string | null;
    onChange(event: any);
}

const CategorySelect = (props: Props) => {
    if (props.categories.length === 0 || !props.selected) {
        return null;
    }
    const options: any[] = props.categories.map((c: Category) => <option key={c.value} value={c.value} className={classes.Option}>{c.text}</option>);
    return <Select value={props.selected} onChange={props.onChange}>{options}</Select>;
};

export default CategorySelect;