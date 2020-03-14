import React from 'react';
import classes from './SvgIcon.module.scss';
import Icon from '@material-ui/core/Icon';

const SvgIcon = (props) => {
    return (
        <Icon classes={{root: classes.Root}}>
            <img className={classes.Img} src={props.svg} alt=""/>
        </Icon>
    )
};

export default SvgIcon;