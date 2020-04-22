import React from 'react';
import classes from './RoleTile.module.scss';

const RoleTile = (props) => (
    <div className={classes.Container} onClick={props.click}>
        {props.children}
        <p>{props.title}</p>
    </div>
);

export default RoleTile;