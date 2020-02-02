import React from 'react';
import classes from './RegisterTile.module.scss';

const registerTile = (props) => {
    return (
        <div className={classes.Container} onClick={props.click}>
            {props.children}
            <p>{props.title}</p>
        </div>
    )
};

export default registerTile;