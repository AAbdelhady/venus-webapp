import React, {FC} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const loading: FC<any> = (props) => {
    return (
        <Backdrop id="LoadingBackdrop" open={props.show}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default loading;