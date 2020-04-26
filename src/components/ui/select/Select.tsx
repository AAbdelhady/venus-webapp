import React, {ReactNode} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FormControl from '@material-ui/core/FormControl';
import MuiSelect from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {random} from '../../../utils/common';
import classes from './Select.module.scss';
import {breakpoints} from '../../../utils/theme';

interface Props {
    options?: any[];
    textProperty: string;
    valueProperty: string;
    label?: string;
    name: string;
    value: any;
    style?: any;
    onChange(event);
}

const menuItems = (options: any[], textProperty: string, valueProperty: string): ReactNode[] => options.map((option, idx) =>
    <MenuItem key={idx} value={option[valueProperty]}>{option[textProperty]}</MenuItem>
);

const nativeOptions = (options: any[], textProperty: string, valueProperty: string): ReactNode[] => options.map((option, idx) =>
    <option key={idx} value={option[valueProperty]}>{option[textProperty]}</option>
);

const Select = (props: Props) => {
    const options = props.options ? props.options : [];
    const selectId = `select-${random()}`;
    const label = props.label && <InputLabel htmlFor={selectId}>{props.label}</InputLabel>;
    const currentValue = props.value ? props.value : '';
    const isMobile = useMediaQuery<any>(theme => theme.breakpoints.down(breakpoints.sm));
    return (
        <FormControl style={props.style} className={classes.Container}>
            {label}
            <MuiSelect native={isMobile} name={props.name} value={currentValue} onChange={props.onChange} className="w-100" inputProps={{id: selectId}}>
                {isMobile ? nativeOptions(options, props.textProperty, props.valueProperty) : menuItems(options, props.textProperty, props.valueProperty)}
            </MuiSelect>
        </FormControl>
    );
};

export default Select;