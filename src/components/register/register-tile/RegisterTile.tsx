import React from 'react';
import classes from './RegisterTile.module.scss';

const RegisterTile = (props) => {
    return (
        <div className={classes.Container} onClick={props.click}>
            {props.children}
            <p>{props.title}</p>
        </div>
    )
};

export default RegisterTile;