import React from 'react';
import {List} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import classes from './ArtistSpecialityList.module.scss';
import {Speciality} from '../../../models/speciality.model';

interface Props {
    specialities: Speciality[] | null | undefined;
    selectSpeciality(s: Speciality);
}

const ArtistSpecialityList = (props: Props) => {
    const specialityList = () => props.specialities && props.specialities.map(s =>
        <ListItem button key={s.id} onClick={() => props.selectSpeciality(s)} className="row">
            <ListItemIcon className="col-2"><InboxIcon/></ListItemIcon>
            <ListItemText primary={s.name} className="col-5"/>
            <ListItemText primary={s.price} className="col-5"/>
        </ListItem>
    );
    return (
        <List component="nav" className={classes.SpecialityList}>
            {specialityList()}
        </List>
    );
};

export default ArtistSpecialityList;