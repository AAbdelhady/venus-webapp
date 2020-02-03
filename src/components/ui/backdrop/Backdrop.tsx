import React from 'react';
import Backdrop from "@material-ui/core/Backdrop/Backdrop";

const backdrop = (props) => {
    const style = {
        zIndex: props.zIndex,
        color: '#fff'
    };
    return (
        <Backdrop style={style} open={props.show} onClick={props.clicked}>
            {props.children}
        </Backdrop>
    );
};

export default backdrop;