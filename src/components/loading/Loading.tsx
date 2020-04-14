import React from 'react';
import Backdrop from '../ui/backdrop/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {ZIndex} from '../../utils/enums';

const Loading = (props) => (
    <Backdrop show={props.show} zIndex={ZIndex.loadingBackdrop}>
        <CircularProgress color="inherit"/>
    </Backdrop>
);

export default Loading;