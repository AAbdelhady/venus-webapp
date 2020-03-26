import React from 'react';
import {KeyboardTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface Props {
    label: string;
    value: any;
    onChange(any);
}

const TimePicker = (props: Props) => {
    const theme = useTheme();
    const pickerVariant = useMediaQuery(theme.breakpoints.down('sm')) ? 'dialog' : 'inline';
    const onChange = (event) => props.onChange(event.toDate());
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardTimePicker
                disableToolbar
                variant={pickerVariant}
                label={props.label}
                value={props.value}
                onChange={onChange}
            />
        </MuiPickersUtilsProvider>
    );
};

export default TimePicker;