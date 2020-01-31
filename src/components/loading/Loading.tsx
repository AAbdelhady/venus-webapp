import React, {FC} from 'react';
import Backdrop from '../ui/backdrop/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {ZIndex} from '../../utils/enums';

const loading: FC<any> = (props) => {
    return (
        <Backdrop show={props.show} zIndex={ZIndex.loadingBackdrop}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default loading;