import React from 'react';
import MuiBackdrop from "@material-ui/core/Backdrop/Backdrop";

const Backdrop = (props) => {
    const style = {
        zIndex: props.zIndex,
        color: '#fff'
    };
    return (
        <MuiBackdrop style={style} open={props.show} onClick={props.clicked}>
            {props.children}
        </MuiBackdrop>
    );
};

export default Backdrop;