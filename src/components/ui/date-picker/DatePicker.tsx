import React from 'react';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const DATE_FORMAT = 'DD/MM/YYYY';

interface Props {
    name: string;
    label: string;
    value: any;
    disableFuture?: boolean;
    disablePast?: boolean;
    onChange(any);
}

const DatePicker = (props: Props) => {
    const theme = useTheme();
    const pickerVariant = useMediaQuery(theme.breakpoints.down('sm')) ? 'dialog' : 'inline';
    const onChange = (event) => props.onChange(event.toDate());
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant={pickerVariant}
                format={DATE_FORMAT}
                label={props.label}
                value={props.value}
                onChange={onChange}
                disableFuture={props.disableFuture}
                disablePast={props.disablePast}
                autoOk
            />
        </MuiPickersUtilsProvider>
    );
};

export default DatePicker;