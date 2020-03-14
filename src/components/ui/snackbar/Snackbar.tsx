import React, {useState} from 'react';
import {Observable} from 'rxjs';
import MuiSnackbar from '@material-ui/core/Snackbar';
import Alert, {Color} from '@material-ui/lab/Alert';


const DEFAULT_TIMEOUT = 3000;

interface Props {
    observable: Observable<any>;
    timeout?: number;
    severity?: Color
}

const Snackbar = (props: Props) => {
    const [show, setShow] = useState(false);
    const timeout = props.timeout ? props.timeout : DEFAULT_TIMEOUT;
    const severity = props.severity ? props.severity : 'info';
    props.observable.subscribe(() => setShow(true));
    return (
        <MuiSnackbar open={show} autoHideDuration={timeout} onClose={() => setShow(false)}>
            <Alert severity={severity} variant="filled">
                Booking has been created successfully!
            </Alert>
        </MuiSnackbar>
    )
};

export default Snackbar;