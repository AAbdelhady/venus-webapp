import React from 'react';
import {useSelector} from 'react-redux';
import Backdrop from '../ui/backdrop/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {ZIndex} from '../../utils/enums';

const Loading = () => {
    const showLoading = useSelector(state => state.ui.showLoading);
    return (
        <Backdrop show={showLoading} zIndex={ZIndex.loadingBackdrop}>
            <CircularProgress color="inherit"/>
        </Backdrop>
    );
};

export default Loading;