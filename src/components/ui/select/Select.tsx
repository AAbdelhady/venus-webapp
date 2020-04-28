import React, {ReactNode, useRef} from 'react';
import FormControl from '@material-ui/core/FormControl';
import MuiSelect from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import classes from './Select.module.scss';

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

const Select = (props: Props) => {
    const options = props.options ? props.options : [];
    const selectId = useRef(`select-${Date.now()}`);
    const label = props.label && <InputLabel htmlFor={selectId.current}>{props.label}</InputLabel>;
    const currentValue = props.value ? props.value : '';
    return (
        <FormControl style={props.style} className={classes.Container}>
            {label}
            <MuiSelect name={props.name} value={currentValue} onChange={props.onChange} className="w-100" inputProps={{id: selectId.current}}>
                {menuItems(options, props.textProperty, props.valueProperty)}
            </MuiSelect>
        </FormControl>
    );
};

export default Select;